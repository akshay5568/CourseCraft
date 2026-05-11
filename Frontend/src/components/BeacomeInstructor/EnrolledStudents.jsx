import React from "react";
import { useSelector } from "react-redux";
import Loading from "../ShimmerUI/Loading";

export const EnrolledStudents = ({EnrolledStudents}) => {
  const courseDetails = useSelector((state) => state?.CourseDetails?.details);
  if (EnrolledStudents == undefined) return <Loading/>
  return (
<div className="mt-6 w-full">
  {/* Heading */}
  <div className="flex items-center justify-between mb-4">
    <h1 className="text-lg sm:text-xl font-bold text-gray-800">
      Enrolled Students
    </h1>

    <span className="rounded-full bg-purple-100 px-4 py-1 text-xs sm:text-sm font-semibold text-purple-700">
      {courseDetails?.enrolledStudents?.length || 0} Students
    </span>
  </div>

  {/* Loading */}
  {EnrolledStudents == undefined ? (
    <div className="flex justify-center py-10">
      <Loading />
    </div>
  ) : (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      
      {/* Student List */}
      <div className="max-h-[400px] overflow-y-auto p-3 sm:p-4 space-y-3">
        {courseDetails?.enrolledStudents?.length > 0 ? (
          EnrolledStudents.map((students) => (
            <div
              key={students._id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-xl border border-gray-200 bg-gray-50 p-4 hover:bg-purple-50 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                
                {/* Avatar */}
                <div className="h-11 w-11 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm uppercase">
                  {students?.name?.charAt(0)}
                </div>

                {/* Info */}
                <div className="break-all">
                  <h1 className="text-sm sm:text-base font-semibold text-gray-800">
                    {students.name}
                  </h1>

                  <p className="text-xs sm:text-sm text-gray-500">
                    {students.email}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="text-5xl mb-3">🎓</div>

            <h2 className="text-lg font-semibold text-gray-700">
              No Students Yet
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Students enrolled in your course will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  )}
</div>
  );
};

export default EnrolledStudents;
