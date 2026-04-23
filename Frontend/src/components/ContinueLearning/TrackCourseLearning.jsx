import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { jsx } from "react/jsx-runtime";

export const TrackCourseLearning = ({
  totalCourseVideos,
  totalVideoWatchedByUser,
}) => {
  const [persentageOfCompletion, setPersentageOfCompletion] = useState(
    (totalVideoWatchedByUser / totalCourseVideos) * 100
  );
  useEffect(() => {
    setPersentageOfCompletion(
      (totalVideoWatchedByUser / totalCourseVideos) * 100
    );
  }, [totalCourseVideos, totalVideoWatchedByUser]);
  return (
    <div className="p-2 w-full">
      <div
        className="bg-blue-300 w-full  rounded-xl"
        style={{ width: totalCourseVideos == 0 ? 0 : persentageOfCompletion*3}}    
      >
        <span className="font-semibold w-70 text-center text-xs block">
          {totalCourseVideos == 0 ? 0 : persentageOfCompletion.toFixed(2)}% Completed
        </span>
      </div>
    </div>
  );
};
export default TrackCourseLearning;
