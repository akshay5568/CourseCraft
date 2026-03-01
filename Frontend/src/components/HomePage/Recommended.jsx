import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { addVideo } from "../../Slice/VideoPlayerVideo";
import useVideoDeleteForVideoPlayer from "../../Hooks/useVideoDeleteForVideoPlayer";

export const Recommended = () => {
  const allCourses = useSelector((state) => state.CourseDetails.allCourses);
    const {deleteVideoForVideoPlayer} = useVideoDeleteForVideoPlayer();
  
  return (
    <div className="mt-7">
      <div className="text-[#2a2b40]">
        <span className="text-3xl font-bold">What to learn next</span>
        <br />
        <br />
        <span className="text-xl font-semibold">Our top pick for you</span>
      </div>

      <div className=" mt-3 p-5 flex gap-3 overflow-scroll rounded-md">       
        {allCourses.map((course) => {
          return (
            <Link
              onClick={deleteVideoForVideoPlayer}
              key={course?._id}      
              to={`course/${course._id}`}
              className="w-70 h-70 rounded-md"
            >
              <div className="w-full">
                <img
                  className="w-full h-40 rounded-md object-fill"
                  src={
                    course?.thubmnailUrl
                      ? course?.thubmnailUrl
                      : course?.thubmnail
                  }
                  alt="image"
                />
              </div>
              <div className="p-1">
                <h1 className="mt-1 font-semibold text-[#2a2b40]">
                  {course.courseName.substring(0, 30) + "..."}
                </h1>
                <h4 className="font-semibold mb-1 text-xs text-[#5a5c73]">
                  {course?.createdBy?.name}
                </h4>
                <h4 className="text-xs text-[#5a5c73]">
                  ({course?.enrolledStudents?.length})
                </h4>
                <h2 className="text-sm font-semibold">${course.price}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Recommended;
