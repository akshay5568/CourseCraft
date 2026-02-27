import React from "react";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import CourseSections from "./CourseSections";

export const VideoPlayerPage = ({ courseID }) => {
  const purechasedcourse = useSelector((user) => user.User.courses);
  const filterCourses = purechasedcourse.filter(
    (course) => course.courseID._id == courseID
  );

  return (
    <div>
      <Header />
      <div className="w-full flex p-3">
        <div className="w-[40%] border rounded-md border-gray-300 p-2">
          <h1>Sections</h1>

          <CourseSections
            purechasedcourse={filterCourses
              .map((course) => course?.courseID?.sectionIds)
              ?.flat()}
          />
        </div>

        <div className="w-[60%]"></div>
      </div>
    </div>
  );
};

export default VideoPlayerPage;
