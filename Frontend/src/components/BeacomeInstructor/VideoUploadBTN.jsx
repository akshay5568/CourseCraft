import { useRef } from "react";
import useGetCourseData from "../../Hooks/ForSeller/useGetCourseData";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { mainURL } from "../../Constants/Constant.js";

export const VideoUploadBTN = ({id,sectionID}) => {
  useGetCourseData();
  const video = useRef();
  const [uplodingBar, setUplodingBar] = useState();
  const [refresh,setRefresh] = useState(0);


  const uploadVideoBTN = async () => {
    const token = localStorage.getItem("jwtToken");
    const formData = new FormData();
    formData.append("id", id);
    formData.append("video", video.current.files[0]);
    formData.append("sectionID",sectionID)
    const res = await axios.post(`${mainURL}/video-uploder`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (e) => {
        const progress = Math.round((e.loaded * 100) / e.total);
        setUplodingBar(progress);
      },
    });
    setRefresh(refresh + 1);
    console.log(res.data);
  };
  useGetCourseData(refresh);
  return (
    <div className="border border-gray-200 p-3 h-fit rounded-md">
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="file" accept="video/*" ref={video} /> <br />
        <button
          className="p-2 bg-amber-300 rounded-md cursor-pointer mt-3"
          onClick={uploadVideoBTN}
        >
          Upload video {uplodingBar && uplodingBar}{" "}
        </button>
      </form>
    </div>
  );
};
export default VideoUploadBTN;
