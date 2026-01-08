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
            <Link key={course?._id} className="w-70 h-70 rounded-md">
              <div className="w-full">
                <img
                  className="w-full h-40 rounded-md object-fill"
                  src={course?.thubmnail}
                  alt="image"
                />
              </div>
              <div className="p-1">
                <h1 className="mt-1 font-semibold text-[#2a2b40]">
                  {course.courseName.substring(0, 30) + "..."}
                </h1>
                <h4 className="font-semibold mb-1 text-xs text-[#5a5c73]">
                  {course.createdBy}
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

export default AllCourses;
