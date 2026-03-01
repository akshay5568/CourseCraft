import React from "react";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import CourseSections from "./CourseSections";

export const VideoPlayerPage = ({ courseID }) => {
  const purechasedcourse = useSelector((user) => user.User.courses);
  const filterCourses = purechasedcourse.filter(
    (course) => course.courseID._id == courseID
  );

  const videoUrl = useSelector(state => state.videoPlayerVideo.videoLink);

  console.log(videoUrl);

  return (
    <div>
      <Header />
      <div className="w-full gap-2 flex p-3">
        <div className="w-[40%] border rounded-md border-gray-300 p-2">
          <h1>Sections</h1>

          <CourseSections
            purechasedcourse={filterCourses
              .map((course) => course?.courseID?.sectionIds)
              ?.flat()}
          />
        </div>

        <div className="w-[60%] p-3 border border-gray-300 rounded-md">
             {videoUrl != null &&  <video className="w-full rounded-md" controls muted src={videoUrl}></video>}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerPage;
