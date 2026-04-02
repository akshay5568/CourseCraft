import axios from "axios";
import React, { useEffect, useState } from "react";
import { mainURL } from "../../Constants/Constant";
import Loading from "../ShimmerUI/Loading";
import useGetAllUsersMcqs from "../../Hooks/useGetAllUsersMcqs";

export const AllUsersMcqs = ({ courseDetails, refresh }) => {
  const [allUserMcqs, setAllUsersMcqs] = useState([]);
  const [loading, setLoading] = useState(false);
  const userID = courseDetails[0]?.userID;
  const courseID = courseDetails[0]?.courseID?._id;
  const [page, setPage] = useState(0);

  useGetAllUsersMcqs(setLoading, setAllUsersMcqs, refresh, userID, courseID);

  if (allUserMcqs.length == 0) {
    return <div>You have not appeared in any test yet....</div>;
  }
  return (
    <div className=" w-full p-2 flex">
      {loading && (
        <div>
          <Loading />
        </div>
      )}

      <div className="w-[65%]">
        <h1>All tests scoreboard</h1>
        <div className="rounded-md flex flex-wrap gap-3">
          {/* {allUserMcqs?.map((mcqs, Bindex) => (
            <div key={mcqs._id} className="bg-gray-200 rounded-md p-3 mt-1.5">  
              <span>Test : {Bindex + 1}</span>
              {mcqs.AIQuesAns.map((mcq, index) => (
                <div key={index} className="p-2">
                  <h1 className="font-semibold">
                    {index + 1}. {mcq.question}
                  </h1>
                  <div
                    className="flex gap-2 p-3 rounded-xl"
                    style={{
                      backgroundColor:
                        mcq.answer === mcqs.usersAnswers[index]
                          ? "lightgreen"
                          : "tomato",
                    }}
                  >
                    {mcq.options.map((option, oIndex) => (
                      <div key={oIndex} className="font-extralight">
                        <span>{oIndex + 1}</span>. {option}
                      </div>
                    ))}
                  </div>

                  {mcq.answer === mcqs.usersAnswers[index] ? (
                    ""
                  ) : (
                    <div className="flex gap-3 text-sm font-semibold">
                      <span className="text-green-500">
                        Right answer : {mcq.answer}
                      </span>
                      <span className="text-red-400">
                        Your answer :{mcqs.usersAnswers[index]}
                      </span>
                    </div>
                  )}
                </div>
              ))}
              <div className="p-2 font-bold">
                {(mcqs.rightAnswers.length / 5) * 100}%
              </div>
            </div>
          ))} */}

          <div className="bg-gray-200 h-145 rounded-md p-3 mt-1.5">
            {/* <span>Test : {Bindex + 1}</span> */}
            {allUserMcqs[page]?.AIQuesAns.map((mcq, index) => (
              <div key={index} className="p-2">
                <h1 className="font-semibold">
                  {index + 1}. {mcq.question}
                </h1>
                <div
                  className="flex gap-2 p-3 rounded-xl"
                  style={{
                    backgroundColor:
                      mcq.answer === allUserMcqs[page]?.usersAnswers[index]
                        ? "lightgreen"
                        : "tomato",
                  }}
                >
                  {mcq.options.map((option, oIndex) => (
                    <div key={oIndex} className="font-extralight">
                      <span>{oIndex + 1}</span>. {option}
                    </div>
                  ))}
                </div>

                {mcq.answer === allUserMcqs[page].usersAnswers[index] ? (
                  ""
                ) : (
                  <div className="flex gap-3 text-sm font-semibold">
                    <span className="text-green-500">
                      Right answer : {mcq.answer}
                    </span>
                    <span className="text-red-400">
                      Your answer :{allUserMcqs[page]?.usersAnswers[index]}
                    </span>
                  </div>
                )}
              </div>
            ))}
            <div className="p-2 font-bold">
              {(allUserMcqs[page]?.rightAnswers.length / 5) * 100}%
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          {page > 0 && (
            <button
              onClick={() => setPage(page - 1)}
              className="font-bold text-sm cursor-pointer"
            >
              Prev
            </button>
          )}
          <span>
            Page : {page + 1}/{allUserMcqs.length}
          </span>
          {page + 1 < allUserMcqs?.length && (
            <button
              onClick={() => setPage(page + 1)}
              className="font-bold text-sm cursor-pointer"
            >
              Next
            </button>
          )}
        </div>
      </div>

      <div className="p-2 w-[35%]">
        <h1>Summary of All tests</h1>
        <div className="bg-gray-200 rounded-md p-3">knmkn</div>
      </div>
    </div>
  );
};

export default AllUsersMcqs;
