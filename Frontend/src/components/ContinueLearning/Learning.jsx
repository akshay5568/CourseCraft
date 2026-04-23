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
  console.log(totalCourseVideos);
  console.log(totalVideoWatchedByUser);

  return (
    <div>
      <Header />
      <div>
        {usersCourses?.length != 0 ? (
          <div className="p-3">
            <span className="font-extralight text-xl">
              Your all purchased courses
            </span>
            <div className="flex gap-3 h-fit flex-wrap mt-3">
              {usersCourses?.map((course, index) => (
                <Link
                  onClick={deleteVideoForVideoPlayer}
                  key={course?._id}
                  className="border h-70 border-gray-300 rounded-md "
                  to={`/course/${course?.courseID?._id}`}
                >
                  <div className="w-75 p-1">
                    <img
                      className="w-full h-40 rounded-md"
                      src={course.courseID?.thubmnailUrl}
                      alt=""
                    />
                    <div className="mt-1">
                      <h1 className="font-extralight break-all">
                        {course.courseID?.courseName.substring(0, 50) + "..."}
                      </h1>
                    </div>
                    <span className="">₹{course.courseID?.price}</span>
                    <br />
                    <span className="text-sm font-extralight">
                      {course.courseID?.enrolledStudents.length} students
                    </span>
                  </div>
                  <div className="w-full">
                    <TrackCourseLearning
                      totalCourseVideos={totalCourseVideos[index]}
                      totalVideoWatchedByUser={totalVideoWatchedByUser[index]}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <EmptyLearning />
        )}
      </div>
    </div>
  );
};
export default Learning;
