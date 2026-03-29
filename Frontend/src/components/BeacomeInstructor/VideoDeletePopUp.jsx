import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import { mainURL } from "../../Constants/Constant";
import useGetCourseData from "../../Hooks/ForSeller/useGetCourseData";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../ShimmerUI/Loading";

export const VideoDeletePopUp = ({
  setDeleteBTNPopUp,
  deleteBTNPopUp,
  sectionID,
  videoLink,
}) => {
  const [refresh, setRefresh] = useState(0);
  const [videoDeleteLoading, setVideoDeleteLoading] = useState(false);

  const videoDeleteBTN = async () => {
    const token = localStorage.getItem("jwtToken");
    try {
      setVideoDeleteLoading(true);
      const res = await axios.delete(`${mainURL}/delete-video/${sectionID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          videoLink: videoLink,
        },
      });
      console.log(res.data);
      setRefresh(refresh + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setVideoDeleteLoading(false);
    }
  };
  useGetCourseData(refresh);

  return (
    <div>
      {videoDeleteLoading && (
        <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
          <Loading />
        </div>
      )}
      <div className="flex gap-3 bg-gray-200 p-3 rounded-md font-extralight text-xs">
        <button onClick={videoDeleteBTN} className="cursor-pointer">
          Delete
        </button>
        <button
          onClick={() => setDeleteBTNPopUp(!deleteBTNPopUp)}
          className="cursor-pointer"
        >
          <RxCross2 />
        </button>
      </div>
    </div>
  );
};
export default VideoDeletePopUp;
