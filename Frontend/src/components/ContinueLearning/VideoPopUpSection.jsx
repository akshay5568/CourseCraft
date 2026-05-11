import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVideo, addVideoDescription } from "../../Slice/VideoPlayerVideo";
import axios from "axios";
import { mainURL } from "../../Constants/Constant";
import useGetPurchasedUserCourses from "../../Hooks/useGetPurchasedUserCourses";

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
     <div
      className="
        w-full
        border-t
        border-gray-200
        pt-3
        mt-3
      "
    >
      {courseVideos.map(
        (video, index) => (
          <div
            key={index}
            className="
              flex
              items-center
              justify-between
              gap-3
              p-3
              rounded-lg
              hover:bg-gray-100
              transition
              cursor-pointer
            "
          >
            {/* LEFT SIDE */}
            <div
              className="
                flex
                items-center
                gap-3
                min-w-0
                flex-1
              "
            >
              {/* CHECKBOX */}
              <input
                type="checkbox"
                checked={ids?.includes(
                  video._id
                )}
                onChange={() =>
                  watchedVideo(
                    video._id
                  )
                }
                className="
                  w-4
                  h-4
                  accent-purple-600
                  cursor-pointer
                  shrink-0
                "
              />

              {/* INDEX */}
              <div
                className="
                  text-sm
                  font-semibold
                  text-gray-500
                  w-5
                  shrink-0
                "
              >
                {index + 1}
              </div>

              {/* VIDEO BUTTON */}
              <button
                onClick={() =>
                  videoUploadInVideoPlayer(
                    video.videoUrl,
                    video?.videoDescription
                  )
                }
                className="
                  text-left
                  text-sm
                  md:text-base
                  text-[#1c1d1f]
                  hover:text-purple-700
                  transition
                  wrap-break-words
                  line-clamp-2
                  cursor-pointer
                "
              >
                {video.videoName}
              </button>
            </div>

            {/* DURATION */}
            <div
              className="
                text-xs
                md:text-sm
                font-medium
                text-purple-600
                whitespace-nowrap
                shrink-0
              "
            >
              {(
                video.duration / 60
              ).toFixed(2)}
              m
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default VideoPopUpSection;
