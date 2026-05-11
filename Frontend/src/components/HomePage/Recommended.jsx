import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { addVideo } from "../../Slice/VideoPlayerVideo";
import useVideoDeleteForVideoPlayer from "../../Hooks/useVideoDeleteForVideoPlayer";

export const Recommended = () => {
  const allCourses = useSelector((state) => state.CourseDetails.allCourses);
    const {deleteVideoForVideoPlayer} = useVideoDeleteForVideoPlayer();
  
  return (
       <div className="mt-10 w-full">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-[#1c1d1f]">
          What to learn next
        </h1>

        <p className="mt-2 text-lg text-[#6a6f73]">
          Because you viewed web development
        </p>
      </div>

      {/* Courses */}
      <div
        className="
          mt-6
          flex
          gap-4
          overflow-x-auto
          scrollbar-hide
          scroll-smooth
          pb-4
        "
      >
        {allCourses.map((course) => (
          <Link
            key={course?._id}
            to={`course/${course._id}`}
            onClick={deleteVideoForVideoPlayer}
            className="
              min-w-[260px]
              max-w-[260px]
              shrink-0
              group
            "
          >
            {/* Thumbnail */}
            <div
              className="
                overflow-hidden
                border
                border-gray-200
              "
            >
              <img
                src={
                  course?.thubmnailUrl
                    ? course?.thubmnailUrl
                    : course?.thubmnail
                }
                alt="course"
                className="
                  w-full
                  h-[150px]
                  object-cover
                  group-hover:scale-[1.03]
                  transition-all
                  duration-300
                "
              />
            </div>

            {/* Course Info */}
            <div className="mt-3">
              {/* Title */}
              <h2
                className="
                  text-[16px]
                  font-bold
                  text-[#1c1d1f]
                  leading-5
                  line-clamp-2
                "
              >
                {course?.courseName}
              </h2>

              {/* Instructor */}
              <p
                className="
                  mt-1
                  text-sm
                  text-[#6a6f73]
                "
              >
                {course?.createdBy?.name}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[#b4690e] font-bold text-sm">
                  4.7
                </span>

                <div className="flex text-yellow-500 text-sm">
                  ★★★★★
                </div>

                <span className="text-xs text-[#6a6f73]">
                  ({course?.enrolledStudents?.length})
                </span>
              </div>

              {/* Price */}
              <div className="mt-2 flex items-center gap-2">
                <span
                  className="
                    text-lg
                    font-bold
                    text-[#1c1d1f]
                  "
                >
                  ₹{course?.price}
                </span>

                <span
                  className="
                    text-sm
                    text-gray-500
                    line-through
                  "
                >
                  ₹1999
                </span>
              </div>

              {/* Bestseller */}
              <div className="mt-2">
                <span
                  className="
                    bg-[#eceb98]
                    text-[#3d3c0a]
                    text-xs
                    font-bold
                    px-2
                    py-1
                  "
                >
                  Bestseller
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
