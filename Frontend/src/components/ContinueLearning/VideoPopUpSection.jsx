import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { addVideo, addVideoDescription } from "../../Slice/VideoPlayerVideo";

export const VideoPopUpSection = ({ courseVideos }) => {
  const dispatch = useDispatch();

  const videoUploadInVideoPlayer = (videoUrl, videoDescription) => {
    dispatch(addVideo(videoUrl));
    dispatch(addVideoDescription(videoDescription));
  };

  const [id,setId]  = useState(["69a2bdf53ffff8d9b4fc2dcc"]);


  const addVideo = (v2) =>{
      const isAdded = id.find(i => i == v2);
      if(isAdded) {
           setId(id.filter(i => i != v2));
      }else{
           setId([v2]);
      }
  }
  console.log(id)
  console.log("courseVideos,", courseVideos);
  return (
    <div className="w-full border-t border-gray-300  p-2">
      {courseVideos.map((video, index) => (
        //  <video src={video.videoUrl} muted controls></video>
        <div
          key={index}
          className="flex gap-3 justify-between items-center mt-2"   
        >
          <div className="flex gap-3 items-center">
              <input
              name={video?._id}
              id={video?._id}
              type="checkbox" 
              checked={id?.find(i => i == video._id)}
              onClick={() => addVideo(video._id)}
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
