import React from "react";
import { useSelector } from "react-redux";

export const EnrolledStudents = ({EnrolledStudents}) => {
  console.log(EnrolledStudents)
  const courseDetails = useSelector((state) => state?.CourseDetails?.details);
  return (
    <div className="m-3 w-full">
      <div>
        <h1 className="font-semibold text-sm">
          Total Students Enrolled : {courseDetails?.enrolledStudents?.length}
        </h1>
      </div>

      <div className="mt-3 rounded-md p-2 bg-gray-200 h-80 overflow-scroll w-[80%]">
        {courseDetails?.enrolledStudents?.length > 0 ? (
           <div className="p-1">
              {EnrolledStudents.map(students => (
                 <div key={students._id} className="p-1 w-full border mt-2 rounded-md ">
                     <h1>{students.name}</h1>
                     <h1>{students.email}</h1>
                 </div>
              ))}
           </div>
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
