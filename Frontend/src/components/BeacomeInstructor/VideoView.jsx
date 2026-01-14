import React from "react";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import VideoDeletePopUp from "./VideoDeletePopUp";

export const VideoView = ({ courseVideos }) => {
  const [deleteBTNPopUp, setDeleteBTNPopUp] = useState(false);
  return (
    <div className="w-full">
      {courseVideos[0]?.videos?.map((video, index) => {
        return (
          <div key={courseVideos[0]?.videos[index]} className="flex mt-2 items-end">
            <video
              src={video}
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
