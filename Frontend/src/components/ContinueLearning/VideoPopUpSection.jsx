import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { addVideo } from "../../Slice/VideoPlayerVideo";

export const VideoPopUpSection = ({ courseVideos }) => {
  const dispatch = useDispatch();

  const videoUploadInVideoPlayer = (videoUrl) => {
    dispatch(addVideo(videoUrl));
  };

  console.log(courseVideos);
  return (
    <div className="w-full border-t border-gray-300  p-2">
      {courseVideos.map((video, index) => (
        //  <video src={video.videoUrl} muted controls></video>
        <div
          key={index}
          className="flex gap-3 justify-between items-center mt-2"
        >
          <div className="flex gap-3 ">
            <h1>{index + 1}</h1>
            <button
              onClick={() => videoUploadInVideoPlayer(video.videoUrl)}    
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
