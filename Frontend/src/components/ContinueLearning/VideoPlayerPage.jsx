import React, { useState } from "react";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import CourseSections from "./CourseSections";
import AIMcqs from "./AIMcqs";
import AllUsersMcqs from "./AllUsersMcqs";

export const VideoPlayerPage = ({ courseID }) => {
  const purechasedcourse = useSelector((user) => user.User.courses);
  const filterCourses = purechasedcourse?.filter(
    (course) => course?.courseID?._id == courseID
  );
  const [refresh, setRefresh] = useState(0);
  const videoUrl = useSelector((state) => state.videoPlayerVideo);



  return (
   <div className="min-h-screen bg-[#f7f9fa]">
      <Header />

      {/* MAIN LAYOUT */}
      <div
        className="
          max-w-[1600px]
          mx-auto
          px-3
          md:px-6
          py-5
        "
      >
        <div
          className="
            flex
            flex-col
            xl:flex-row
            gap-5
          "
        >
          {/* LEFT SIDEBAR */}
          <div
            className="
              w-full
              xl:w-[350px]
              bg-white
              border
              border-gray-200
              rounded-xl
              p-4
              h-fit
              xl:sticky
              xl:top-24
            "
          >
            {/* TITLE */}
            <div className="mb-4">
              <h1
                className="
                  text-xl
                  font-bold
                  text-[#1c1d1f]
                "
              >
                Course Sections
              </h1>

              <p
                className="
                  text-sm
                  text-[#6a6f73]
                  mt-1
                "
              >
                Continue your learning
              </p>
            </div>

            {/* SECTION LIST */}
            <CourseSections
              purechasedcourse={filterCourses
                ?.map(
                  (course) =>
                    course?.courseID
                      ?.sectionIds
                )
                ?.flat()}
            />
          </div>

          {/* VIDEO PLAYER */}
          <div className="flex-1">
            {videoUrl?.videoLink ? (
              <div
                className="
                  bg-white
                  border
                  border-gray-200
                  rounded-xl
                  overflow-hidden
                "
              >
                {/* VIDEO */}
                <div className="bg-black">
                  <video
                    className="
                      w-full
                      max-h-[700px]
                    "
                    controls
                    muted
                    src={videoUrl?.videoLink}
                  ></video>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  {/* TITLE */}
                  <h1
                    className="
                      text-2xl
                      font-bold
                      text-[#1c1d1f]
                    "
                  >
                    Lecture Overview
                  </h1>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-3
                      text-[#4b5563]
                      leading-7
                    "
                  >
                    {
                      videoUrl?.videoDescription
                    }
                  </p>

                  {/* AI MCQS */}
                  <div className="mt-8">
                    <AIMcqs
                      courseDetails={
                        filterCourses
                      }
                      setRefresh={
                        setRefresh
                      }
                      refresh={refresh}
                      videoUrl={
                        videoUrl?.videoLink
                      }
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="
                  bg-white
                  border
                  border-gray-200
                  rounded-xl
                  h-[500px]
                  flex
                  items-center
                  justify-center
                  text-center
                  p-6
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
                    Select a Lecture
                  </h1>

                  <p
                    className="
                      mt-3
                      text-[#6a6f73]
                    "
                  >
                    Choose a section from the
                    sidebar to start learning.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* MCQS SECTION */}
        <div className="mt-8">
          <div
            className="
              bg-white
              border
              border-gray-200
              rounded-xl
              p-5
            "
          >
            <div className="mb-5">
              <h1
                className="
                  text-2xl
                  font-bold
                  text-[#1c1d1f]
                "
              >
                Community MCQs
              </h1>

              <p
                className="
                  mt-1
                  text-sm
                  text-[#6a6f73]
                "
              >
                Practice questions shared
                by learners
              </p>
            </div>

            <AllUsersMcqs
              courseDetails={filterCourses}
              refresh={refresh}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerPage;
