import axios from "axios";
import React, { useState } from "react";
import { mainURL } from "../../Constants/Constant";
import Loading from "../ShimmerUI/Loading";
import useGetAllUsersMcqs from "../../Hooks/useGetAllUsersMcqs";
import useGetPurchasedUserCourses from "../../Hooks/useGetPurchasedUserCourses";

export const AIMcqs = ({ transcript, courseDetails,setRefresh,refresh }) => {
  const [AiMcqs, setAIMcqs] = useState([]);

  const userID  = courseDetails[0]?.userID;
  const courseID = courseDetails[0]?.courseID?._id;
  const [ansSubmited, setAnsSubmited] = useState(false);
  

  const [userAnswer, setUserAnswers] = useState({});
  console.log(userID, courseID);
  const handleOptionSelection = (qIndex, option) => {
    setUserAnswers((prev) => ({
      ...prev,
      [qIndex + 1]: option,
    }));
  };

  console.log(userAnswer);

  const [loading, setLoading] = useState(false);

  console.log(AiMcqs);
  const genrateAImcqs = async () => {
    try {
      setLoading(true);
      const mcqs = await axios.post(`${mainURL}/genrate-mcq`, { transcript });
      const data = mcqs.data;
      setAIMcqs(data);
      //   console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const submitAnswer = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("jwtToken");
      const res = await axios.post(
        `${mainURL}/ai/mcq-answer`,
        { userAnswer, AiMcqs, courseID, userID },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setAnsSubmited(true);
      setLoading(false);
      setRefresh(refresh + 1);
    }
  };

  return (
    <div className="">
      {loading && (
        <div>
          <Loading />
        </div>
      )}

      {AiMcqs.length > 0 && (
        <div>
          {AiMcqs.map((mcq, qindex) => (
            <div key={mcq.question} name={mcq.question}>
              <div>
                <h1>
                  {qindex + 1}. {mcq?.question}
                </h1>
                <div>
                  {mcq?.options.map((option, oindex) => (
                    <span key={oindex}>
                      <input
                        name={qindex}
                        value={option}
                        type="radio"
                        checked={option === userAnswer[qindex + 1]}
                        onChange={() => handleOptionSelection(qindex, option)}
                      />
                      {option}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={submitAnswer}
            className="p-2 rounded-md bg-amber-300"
          >
            Submit answers
          </button>
        </div>
      )}
      <button
        className="bg-amber-300 p-2 mt-3 rounded-md"
        onClick={genrateAImcqs}
      >
        Genrate Mcqs
      </button>
    </div>
  );
};
export default AIMcqs;
