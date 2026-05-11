import { useSelector } from "react-redux";
import { Link } from "react-router";
import Loading from "../ShimmerUI/Loading";

export const AllCourses = () => {
  const allCourses = useSelector((state) => state?.CourseDetails?.allCourses);
  if(allCourses.length == 0) return <Loading/>
  return (
     <div className="w-full mt-10">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#1c1d1f]">
          All Courses
        </h1>

        <p className="text-[#6a6f73] mt-2">
          Explore top-rated courses from expert instructors
        </p>
      </div>

      {/* Grid */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
        "
      >
        {allCourses.map((course) => {
          return (
            <Link
              key={course?._id}
              to={`course/${course._id}`}
              className="
                group
                bg-white
                overflow-hidden
                transition-all
                duration-300
                hover:-translate-y-1
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
                  className="
                    w-full
                    h-[180px]
                    object-cover
                    group-hover:scale-[1.03]
                    transition-all
                    duration-300
                  "
                  src={
                    course?.thubmnailUrl
                      ? course?.thubmnailUrl
                      : course?.thubmnail
                  }
                  alt="course"
                />
              </div>

              {/* Content */}
              <div className="pt-3">
                {/* Title */}
                <h1
                  className="
                    text-[16px]
                    font-bold
                    text-[#1c1d1f]
                    leading-5
                    line-clamp-2
                  "
                >
                  {course.courseName}
                </h1>

                {/* Instructor */}
                <h4
                  className="
                    text-sm
                    text-[#6a6f73]
                    mt-1
                  "
                >
                  {course?.createdBy?.name}
                </h4>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-2">
                  <span
                    className="
                      text-[#b4690e]
                      font-bold
                      text-sm
                    "
                  >
                    4.7
                  </span>

                  <div className="text-yellow-500 text-sm">
                    ★★★★★
                  </div>

                  <span
                    className="
                      text-xs
                      text-[#6a6f73]
                    "
                  >
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
                    ₹{course.price}
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
                <div className="mt-3">
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
          );
        })}
      </div>
    </div>
  );
};

export default AllCourses;
