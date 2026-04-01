import React, { useState } from "react";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import CourseSections from "./CourseSections";
import AIMcqs from "./AIMcqs";
import AllUsersMcqs from "./AllUsersMcqs";

export const VideoPlayerPage = ({ courseID }) => {
  const purechasedcourse = useSelector((user) => user.User.courses);
  const filterCourses = purechasedcourse.filter(
    (course) => course?.courseID?._id == courseID
  );
  const [refresh, setRefresh] = useState(0);

  const videoUrl = useSelector((state) => state.videoPlayerVideo);
  console.log(videoUrl);
  return (
    <div className="">
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

        {videoUrl.videoLink != null && (
          <div className="w-[60%] p-3 border border-gray-300 rounded-md">
            <video
              className="w-full rounded-md"
              controls
              muted
              src={videoUrl?.videoLink}
            ></video>

            <div>
              <h1>Des : {videoUrl?.videoDescription}</h1>
              <AIMcqs
                transcript={videoUrl?.videoDescription}
                courseDetails={filterCourses}
                setRefresh={setRefresh}
                refresh={refresh}
              />
            </div>
          </div>
        )}
      </div>

      <div className="p-3">
        <AllUsersMcqs courseDetails={filterCourses} refresh={refresh} />
      </div>
    </div>
  );
};

export default VideoPlayerPage;
