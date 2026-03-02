import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import EmptyLearning from "../ContinueLearning/EmptyLearning";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import useGetPurchasedUserCourses from "../../Hooks/useGetPurchasedUserCourses";
import { addVideo } from "../../Slice/VideoPlayerVideo";
import useVideoDeleteForVideoPlayer from "../../Hooks/useVideoDeleteForVideoPlayer";

export const Learning = () => {
  const usersCourses = useSelector((state) => state?.User.courses || []);

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

  return (
    <div>
      <Header />
      <div>
        {usersCourses?.length != 0 ? (
          <div className="p-3">
            <span className="font-extralight text-xl">Your all purchased courses</span>
            <div className="flex gap-3 h-fit flex-wrap mt-3">
              {usersCourses?.map((course) => (
                <Link
                  onClick={deleteVideoForVideoPlayer}
                  key={course?._id}
                  className="border h-70 border-gray-300 rounded-md "
                  to={`/course/${course?.courseID._id}`}
                >
                  <div className="w-75 h-50 p-1">
                    <img
                      className="w-full h-40 rounded-md"
                      src={course.courseID.thubmnailUrl}
                      alt=""
                    />
                    <div className="mt-1 h-13">
                      <h1 className="font-extralight break-all"> 
                        {course.courseID.courseName.substring(0,50) + "..."}
                      </h1>
                    </div>
                    <span className="">₹{course.courseID.price}</span><br />
                    <span className="text-sm font-extralight">{course.courseID.enrolledStudents.length} students</span>
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
