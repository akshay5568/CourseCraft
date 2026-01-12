import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import { mainURL } from "../../Constants/Constant";
import useGetCourseData from "../../Hooks/ForSeller/useGetCourseData";
import { useEffect } from "react";
import { useState } from "react";
export const VideoDeletePopUp = ({
  setDeleteBTNPopUp,
  deleteBTNPopUp,
  videoId,
  videoLink,
}) => {
   const [refresh,setRefresh] = useState(0);
  const videoDeleteBTN = async () => {
    const token = localStorage.getItem("jwtToken");
    try {
      const res = await axios.delete(`${mainURL}/delete-video/${videoId}`, {
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
    }
  };

  useGetCourseData(refresh);

  return (
    <div className="absolute left-95 flex gap-3 bg-gray-200 p-3 rounded-md font-extralight text-xs">
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
  );
};
export default VideoDeletePopUp;
