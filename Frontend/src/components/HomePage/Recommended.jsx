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

      <div className="border-t border-gray-200 overflow-scroll w-full flex-wrap mt-3 p-5 flex gap-3 rounded-md">       
        {allCourses.map((course) => {
          return (
            <div key={course?._id}  className="w-[23%] p-4 rounded-md border border-gray-200">
            <Link
              onClick={deleteVideoForVideoPlayer}   
              to={`course/${course._id}`}
               className="w-[15%] rounded-md"
            >
              <div className="w-full">
                <img
                  className="w-full h-50 rounded-md object-fill"
                  src={
                    course?.thubmnailUrl
                      ? course?.thubmnailUrl
                      : course?.thubmnail
                  }
                  alt="image"
                />
              </div>
              <div className="p-1">
                <h1 className="mt-1 font-semibold break-all text-[#2a2b40]">
                  {course.courseName.substring(0,50)}
                </h1>
                <h4 className="font-extralight mb-1 text-xs text-[#5a5c73]">
                  {course?.createdBy?.name}
                </h4>
                <span className="text-xs border w-10 text-center rounded p-1 font-extralight border-gray-300 text-[#5a5c73]">
                  {course?.enrolledStudents?.length} ratings
                </span><br />
                <span className="text-sm text-[#2a2b40] font-semibold">₹{course.price}</span>
              </div>
            </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recommended;
