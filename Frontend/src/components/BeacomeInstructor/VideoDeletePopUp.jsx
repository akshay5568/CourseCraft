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
      setRefresh(refresh + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setVideoDeleteLoading(false);
    }
  };
  useGetCourseData(refresh);

  return (
    <div className="relative">
  {videoDeleteLoading && (
    <div className="fixed inset-0 z-[100] bg-white/70 flex items-center justify-center">
      <Loading />
    </div>
  )}

  <div className="w-full max-w-sm rounded-2xl bg-white border border-gray-200 shadow-2xl overflow-hidden">
    
    {/* Header */}
    <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
      <h2 className="text-sm sm:text-base font-bold text-gray-800">
        Delete Video
      </h2>

      <button
        onClick={() => setDeleteBTNPopUp(!deleteBTNPopUp)}
        className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition cursor-pointer"
      >
        <RxCross2 className="text-lg text-gray-700" />
      </button>
    </div>

    {/* Body */}
    <div className="px-4 py-5">
      <p className="text-sm text-gray-600 leading-relaxed">
        Are you sure you want to permanently delete this video?
      </p>

      <p className="mt-2 text-xs text-red-500 font-medium">
        This action cannot be undone.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => setDeleteBTNPopUp(!deleteBTNPopUp)}
          className="w-full rounded-xl border border-gray-300 bg-gray-100 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-all duration-200 cursor-pointer"
        >
          Cancel
        </button>

        <button
          onClick={videoDeleteBTN}
          className="w-full rounded-xl bg-red-500 py-2.5 text-sm font-semibold text-white hover:bg-red-600 transition-all duration-200 cursor-pointer"
        >
          Delete Video
        </button>
      </div>
    </div>
  </div>
</div>
  );
};
export default VideoDeletePopUp;
