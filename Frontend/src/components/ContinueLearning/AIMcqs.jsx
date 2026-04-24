import axios from "axios";
import React, { useState } from "react";
import { mainURL } from "../../Constants/Constant";
import Loading from "../ShimmerUI/Loading";
import useGetAllUsersMcqs from "../../Hooks/useGetAllUsersMcqs";
import useGetPurchasedUserCourses from "../../Hooks/useGetPurchasedUserCourses";

export const AIMcqs = ({
  courseDetails,
  setRefresh,
  refresh,
  videoUrl,
}) => {

  const [AiMcqs, setAIMcqs] = useState([]);
  const userID = courseDetails[0]?.userID;
  const courseID = courseDetails[0]?.courseID?._id;
  const [ansSubmited, setAnsSubmited] = useState(false);

  const [userAnswer, setUserAnswers] = useState({});

  const handleOptionSelection = (qIndex, option) => {
    setUserAnswers((prev) => ({
      ...prev,
      [qIndex + 1]: option,
    }));
  };


  const [loading, setLoading] = useState(false);


  const uploadUrl = async (videoUrl) => {
    const response = await axios.post(
      "https://api.assemblyai.com/v2/transcript",
      {
        audio_url: videoUrl,
        speech_models: ["universal-2"],
      },
      {
        headers: {
          authorization:import.meta.env.VITE_ASSEMBLY_AI_KEY,
          "content-type": "application/json",
        },
      }
    );
    return response.data.id;
  };


  const getTranscript = async (id) => {
    while (true) {
      const res = await axios.get(
        `https://api.assemblyai.com/v2/transcript/${id}`,
        {
          headers: { authorization: import.meta.env.VITE_ASSEMBLY_AI_KEY},
        }
      );

      if (res.data.status === "completed") {
        return res.data.text;
      }

      if (res.data.status === "error") {
        throw new Error("Transcription failed");
      }

      console.log("Processing...");
      await new Promise((r) => setTimeout(r, 3000));
    }
  };

  const genrateAImcqs = async () => {
    try {
      setLoading(true);
      const id = await uploadUrl(videoUrl);
      const transcript = await getTranscript(id);
    
      const mcqs = await axios.post(`${mainURL}/genrate-mcq`, { transcript });  
      const data = mcqs.data;
      setAIMcqs(data);
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
    } catch (error) {
      console.log(error);
    } finally {
      setAIMcqs([]);
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
        <div className="border border-gray-200 p-3 rounded-md ">
          {AiMcqs.map((mcq, qindex) => (
            <div className="p-2" key={mcq.question} name={mcq.question}>
              <div>
                <h1>
                  {qindex + 1}. {mcq?.question}
                </h1>
                <div className="">
                  {mcq?.options.map((option, oindex) => (
                    <span className="flex gap-2" key={oindex}>
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
        Genrate AI Mcq's
      </button>
    </div>
  );
};
export default AIMcqs;
