import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import EmptyLearning from "../ContinueLearning/EmptyLearning";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import useGetPurchasedUserCourses from "../../Hooks/useGetPurchasedUserCourses";
import { addVideo } from "../../Slice/VideoPlayerVideo";
import useVideoDeleteForVideoPlayer from "../../Hooks/useVideoDeleteForVideoPlayer";
import TrackCourseLearning from "./TrackCourseLearning";

export const Learning = () => {
  const usersCourses = useSelector((state) => state?.User.courses || []);
  useGetPurchasedUserCourses();
  const { deleteVideoForVideoPlayer } = useVideoDeleteForVideoPlayer();

  console.log(usersCourses);
  if (!usersCourses) {
    return (
      <div>
        <Header />
        Loading....
      </div>
    );
  }

  const courseDetails = useSelector((state) => state?.User?.courses);
  const [totalCourseVideos, setTotalCourseVideos] = useState([]);
  const [totalVideoWatchedByUser, set] = useState([]);
  useEffect(() => {
    for (let i = 0; i < courseDetails.length; i++) {
      let totalVideo = 0;
      for (let j = 0; j < courseDetails[i]?.courseID?.sectionIds?.length; j++) {
        totalVideo += courseDetails[i]?.courseID?.sectionIds[j]?.videos.length;
      }
      setTotalCourseVideos((prev) => [...prev, totalVideo]);
    }

    for (let i = 0; i < courseDetails.length; i++) {
      let totalWatchedVideos = 0;
      totalWatchedVideos += courseDetails[i].watchedVideosId.length;
      set((prev) => [...prev, totalWatchedVideos]);
    }
  }, [courseDetails]);

  return (
     <div
      className="
        min-h-screen
        bg-[#f7f9fa]
        pb-20
        md:pb-0
      "
    >
      <Header />

      {usersCourses?.length !==
      0 ? (
        <div
          className="
            max-w-[1400px]
            mx-auto
            px-4
            md:px-8
            py-8
          "
        >
          {/* HEADER */}
          <div className="mb-8">
            <h1
              className="
                text-3xl
                md:text-4xl
                font-bold
                text-[#1c1d1f]
              "
            >
              Continue Learning
            </h1>

            <p
              className="
                mt-2
                text-[#6a6f73]
                text-sm
                md:text-base
              "
            >
              Pick up where you
              left off and continue
              your learning journey.
            </p>
          </div>

          {/* COURSES GRID */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-6
            "
          >
            {usersCourses?.map(
              (
                course,
                index
              ) => (
                <Link
                  key={
                    course?._id
                  }
                  to={`/course/${course?.courseID?._id}`}
                  onClick={
                    deleteVideoForVideoPlayer
                  }
                  className="
                    bg-white
                    border
                    border-gray-200
                    rounded-2xl
                    overflow-hidden
                    hover:shadow-xl
                    transition
                    duration-300
                    group
                  "
                >
                  {/* IMAGE */}
                  <div
                    className="
                      overflow-hidden
                    "
                  >
                    <img
                      className="
                        w-full
                        h-48
                        object-cover
                        group-hover:scale-105
                        transition
                        duration-300
                      "
                      src={
                        course
                          .courseID
                          ?.thubmnailUrl
                      }
                      alt="course"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-4">
                    {/* TITLE */}
                    <h1
                      className="
                        text-base
                        md:text-lg
                        font-semibold
                        text-[#1c1d1f]
                        leading-6
                        line-clamp-2
                        min-h-[52px]
                      "
                    >
                      {
                        course
                          .courseID
                          ?.courseName
                      }
                    </h1>

                    {/* STUDENTS */}
                    <p
                      className="
                        mt-2
                        text-sm
                        text-[#6a6f73]
                      "
                    >
                      {
                        course
                          .courseID
                          ?.enrolledStudents
                          .length
                      }{" "}
                      students
                    </p>

                    {/* PRICE */}
                    <h2
                      className="
                        mt-3
                        text-lg
                        font-bold
                        text-[#1c1d1f]
                      "
                    >
                      ₹
                      {
                        course
                          .courseID
                          ?.price
                      }
                    </h2>

                    {/* PROGRESS */}
                    <div className="mt-5">
                      <TrackCourseLearning
                        totalCourseVideos={
                          totalCourseVideos[
                            index
                          ]
                        }
                        totalVideoWatchedByUser={
                          totalVideoWatchedByUser[
                            index
                          ]
                        }
                      />
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      ) : (
        <EmptyLearning />
      )}
    </div>
  );
};
export default Learning;
