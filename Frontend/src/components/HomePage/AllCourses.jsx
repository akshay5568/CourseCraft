import { useSelector } from "react-redux";
import { Link } from "react-router";

export const AllCourses = () => {
  const allCourses = useSelector((state) => state?.CourseDetails?.allCourses);
  return (
    <div className="w-full p-3 mt-5 rounded-md">
      <div>
        <h1 className="mt-7 text-3xl text-[#2a2b40]">AllCourses</h1>
      </div>
      <div className="w-full p-3 flex flex-wrap gap-5">
        {allCourses.map((course) => {
          return (
            <div className="w-[23%] h-80 border p-4 rounded-md border-gray-300">
            <Link
              key={course?._id}
              to={`course/${course._id}`}
              className="w-full"
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
              <div className="p-1 w-full">
                <h1 className="mt-1 font-semibold break-all text-[#2a2b40]">
                  {course.courseName.substring(0,50)}
                </h1>
                <h4 className="font-extralight mb-1 text-xs text-[#5a5c73]">
                  {course?.createdBy?.name}
                </h4>
                <h2 className="text-xs rounded w-15  inline border-gray-300 p-1 text-center border text-[#5a5c73]">
                  {course?.enrolledStudents?.length} ratings
                </h2>
                <h2 className="text-sm mt-2 font-semibold">₹{course.price}</h2>
              </div>
            </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCourses;
