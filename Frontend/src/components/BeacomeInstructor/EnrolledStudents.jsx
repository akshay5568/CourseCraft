import React from "react";
import { useSelector } from "react-redux";

export const EnrolledStudents = () => {
  const courseDetails = useSelector((state) => state?.CourseDetails?.details);
  console.log(courseDetails)
  return (
    <div className="m-3 w-full">
      <div>
        <h1 className="font-semibold text-sm">
          Total Students Enrolled : {courseDetails?.enrolledStudents?.length}
        </h1>
      </div>

      <div className="mt-3 rounded-md bg-gray-200 h-80 overflow-scroll w-[80%]">
        {courseDetails?.enrolledStudents?.length > 0 ? (
          " "
        ) : (
          <div className="text-center mt-8 font-semibold text-sm">
            No one student enrolled yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default EnrolledStudents;
