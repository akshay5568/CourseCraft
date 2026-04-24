import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { addVideo, addVideoDescription } from "../../Slice/VideoPlayerVideo";
import axios from "axios";
import { mainURL } from "../../Constants/Constant";
import useGetPurchasedUserCourses from "../../Hooks/useGetPurchasedUserCourses";
import useRefreshLoginHandle from "../../Hooks/useRefreshLoginHandle";

export const VideoPopUpSection = ({ courseVideos, courseId }) => {
  const dispatch = useDispatch();
  const videoUploadInVideoPlayer = (videoUrl, videoDescription) => {
    dispatch(addVideo(videoUrl));
    dispatch(addVideoDescription(videoDescription));
  };

  const [refResh, setRef] = useState(false);
  const [ids, setIDs] = useState([]);
  useGetPurchasedUserCourses(refResh);

  const courseDetails = useSelector((state) => state?.User?.courses).filter(
    (course) => course.courseID._id == courseId
  );

  useEffect(() => {
    setIDs(courseDetails[0].watchedVideosId);
  }, [courseDetails]);

  const userID = useSelector((state) => state.User.data._id);

  const trackVideoApi = async (videoID) => {
    try {
      const token = localStorage.getItem("jwtToken");
      const res = await axios.post(
        `${mainURL}/track-video`,
        { videoID, userID, courseId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const watchedVideo = async (videoID) => {
    setIDs((prev) =>
      prev.includes(videoID)
        ? prev.filter((i) => i !== videoID)
        : [...prev, videoID]
    );
    await trackVideoApi(videoID);
    setRef((prev) => !prev);
  };

  return (
    <div className="w-full border-t border-gray-300  p-2">
      {courseVideos.map((video, index) => (
        //  <video src={video.videoUrl} muted controls></video>
        <div
          key={index}
          className="flex gap-3 justify-between items-center mt-2"   
        >
          {console.log(video._id)}
          <div className="flex gap-3 items-center">
            <input
              type="checkbox"
              checked={ids?.includes(video._id)}
              onChange={() => watchedVideo(video._id)}     
            />
            <h1>{index + 1}</h1>
            <button
              onClick={() =>
                videoUploadInVideoPlayer(
                  video.videoUrl,
                  video?.videoDescription
                )
              }
              className="text-xs cursor-pointer font-extralight text-[#5a5c72] break-all"
            >
              {video.videoName}
            </button>
          </div>
          <h1 className="text-xs font-semibold text-purple-400">
            {(video.duration / 60).toFixed(2)}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default VideoPopUpSection;
