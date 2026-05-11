import React, { useState } from "react";

import Loading from "../ShimmerUI/Loading";

import useGetAllUsersMcqs from "../../Hooks/useGetAllUsersMcqs";

import MCQsChart from "./MCQsChart";

export const AllUsersMcqs = ({
  courseDetails,
  refresh,
}) => {
  const [allUserMcqs, setAllUsersMcqs] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [page, setPage] =
    useState(0);

  const userID =
    courseDetails[0]?.userID;

  const courseID =
    courseDetails[0]?.courseID?._id;

  useGetAllUsersMcqs(
    setLoading,
    setAllUsersMcqs,
    refresh,
    userID,
    courseID
  );

  if (loading) {
    return <Loading />;
  }

  if (allUserMcqs?.length === 0) {
    return (
      <div
        className="
          w-full
          bg-white
          border
          border-gray-200
          rounded-xl
          p-10
          text-center
        "
      >
        <h1
          className="
            text-2xl
            font-bold
            text-[#1c1d1f]
          "
        >
          No Tests Attempted Yet
        </h1>

        <p
          className="
            mt-3
            text-[#6a6f73]
          "
        >
          Complete quizzes to see
          your MCQ history and
          performance analytics.
        </p>
      </div>
    );
  }

  const currentTest =
    allUserMcqs[page];

  const percentage =
    (
      (currentTest?.rightAnswers
        ?.length /
        currentTest?.AIQuesAns
          ?.length) *
      100
    ).toFixed(0);

  return (
    <div
      className="
        w-full
        flex
        flex-col
        xl:flex-row
        gap-6
      "
    >
      {/* LEFT SIDE */}
      <div className="flex-1">
        {/* HEADER */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-4
            mb-5
          "
        >
          <div>
            <h1
              className="
                text-2xl
                font-bold
                text-[#1c1d1f]
              "
            >
              All Tests Scoreboard
            </h1>

            <p
              className="
                text-sm
                text-[#6a6f73]
                mt-1
              "
            >
              Review your quiz
              performance
            </p>
          </div>

          {/* PAGE CONTROLS */}
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            {page > 0 && (
              <button
                onClick={() =>
                  setPage(page - 1)
                }
                className="
                  px-4
                  py-2
                  rounded-lg
                  border
                  border-gray-300
                  hover:bg-gray-100
                  transition
                  text-sm
                  font-medium
                  cursor-pointer
                "
              >
                Prev
              </button>
            )}

            <span
              className="
                text-sm
                font-medium
                text-[#1c1d1f]
              "
            >
              {page + 1}/
              {allUserMcqs.length}
            </span>

            {page + 1 <
              allUserMcqs?.length && (
              <button
                onClick={() =>
                  setPage(page + 1)
                }
                className="
                  px-4
                  py-2
                  rounded-lg
                  bg-purple-600
                  hover:bg-purple-700
                  transition
                  text-white
                  text-sm
                  font-medium
                  cursor-pointer
                "
              >
                Next
              </button>
            )}
          </div>
        </div>

        {/* SCORE CARD */}
        <div
          className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            overflow-hidden
          "
        >
          {/* TOP BAR */}
          <div
            className="
              flex
              items-center
              justify-between
              px-5
              py-4
              border-b
              border-gray-200
              bg-[#fafafa]
            "
          >
            <h1
              className="
                text-lg
                font-bold
                text-[#1c1d1f]
              "
            >
              Test Result
            </h1>

            <div
              className="
                bg-purple-100
                text-purple-700
                px-4
                py-2
                rounded-full
                text-sm
                font-bold
              "
            >
              {percentage}%
            </div>
          </div>

          {/* QUESTIONS */}
          <div className="p-5">
            {currentTest?.AIQuesAns.map(
              (mcq, index) => {
                const isCorrect =
                  mcq.answer ===
                  currentTest
                    ?.usersAnswers[
                    index
                  ];

                return (
                  <div
                    key={index}
                    className="
                      mb-8
                      border-b
                      border-gray-100
                      pb-6
                    "
                  >
                    {/* QUESTION */}
                    <h1
                      className="
                        text-base
                        md:text-lg
                        font-semibold
                        text-[#1c1d1f]
                        leading-7
                      "
                    >
                      {index + 1}.{" "}
                      {mcq.question}
                    </h1>

                    {/* OPTIONS */}
                    <div className="mt-4 flex flex-col gap-3">
                      {mcq.options.map(
                        (
                          option,
                          oIndex
                        ) => {
                          const isUserAnswer =
                            option ===
                            currentTest
                              ?.usersAnswers[
                              index
                            ];

                          const isRight =
                            option ===
                            mcq.answer;

                          return (
                            <div
                              key={
                                oIndex
                              }
                              className={`
                                p-4
                                rounded-xl
                                border
                                text-sm
                                md:text-base
                                transition

                                ${
                                  isRight
                                    ? "bg-green-100 border-green-300"
                                    : isUserAnswer &&
                                      !isRight
                                    ? "bg-red-100 border-red-300"
                                    : "bg-gray-50 border-gray-200"
                                }
                              `}
                            >
                              <span className="font-semibold mr-2">
                                {oIndex +
                                  1}
                                .
                              </span>

                              {option}
                            </div>
                          );
                        }
                      )}
                    </div>

                    {/* ANSWER RESULT */}
                    {!isCorrect && (
                      <div
                        className="
                          mt-4
                          flex
                          flex-col
                          md:flex-row
                          gap-2
                          text-sm
                          font-medium
                        "
                      >
                        <span className="text-green-600">
                          Correct:
                          {" "}
                          {
                            mcq.answer
                          }
                        </span>

                        <span className="text-red-500">
                          Your answer:
                          {" "}
                          {
                            currentTest
                              ?.usersAnswers[
                              index
                            ]
                          }
                        </span>
                      </div>
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="
          w-full
          xl:w-[350px]
        "
      >
        <div
          className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            p-5
            xl:sticky
            xl:top-24
          "
        >
          {/* TITLE */}
          <div className="mb-5">
            <h1
              className="
                text-xl
                font-bold
                text-[#1c1d1f]
              "
            >
              Performance Summary
            </h1>

            <p
              className="
                text-sm
                text-[#6a6f73]
                mt-1
              "
            >
              Analytics of all tests
            </p>
          </div>

          {/* CHART */}
          <div
            className="
              bg-[#fafafa]
              rounded-xl
              p-3
            "
          >
            <MCQsChart
              allMcqsData={
                allUserMcqs
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsersMcqs;