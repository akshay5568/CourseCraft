import React from "react";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import VideoDeletePopUp from "./VideoDeletePopUp";

export const VideoView = ({ courseVideos,sectionID }) => {
  console.log(courseVideos)
  const [deleteBTNPopUp, setDeleteBTNPopUp] = useState(false);
  return (
    <div className="w-full">
      {courseVideos?.map((video, index) => {
        return (
          <div key={index} className="flex mt-2 items-end">
            <video
              src={video.videoUrl}
              className="rounded-md w-100 object-contain"
              controls
            ></video>
            <button
              onClick={() => setDeleteBTNPopUp(!deleteBTNPopUp)}
              className="font-bold text-xl cursor-pointer"
            >
              <CiMenuKebab />
            </button>

            {deleteBTNPopUp && (
              <VideoDeletePopUp
                setDeleteBTNPopUp={setDeleteBTNPopUp}
                deleteBTNPopUp={deleteBTNPopUp}
                sectionID={sectionID}
                videoLink={video}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default VideoView;
