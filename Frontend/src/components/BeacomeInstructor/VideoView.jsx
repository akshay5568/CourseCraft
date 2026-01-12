import React from "react";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import VideoDeletePopUp from "./VideoDeletePopUp";

export const VideoView = ({ courseVideos }) => {
  const [deleteBTNPopUp, setDeleteBTNPopUp] = useState(false);
  return (
    <div className="w-90">
      {courseVideos[0]?.videos?.map((video, index) => {
        return (
          <div key={courseVideos[0]?.videos[index]} className="mt-3  flex items-end gap-3 w-full rounded-md">
            <video
              src={video}
              className="rounded-md w-full object-contain h-50"
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
                videoId={courseVideos[0]?._id}
                videoLink={courseVideos[0]?.videos[index]}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default VideoView;
