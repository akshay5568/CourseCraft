import { useRef } from "react";
import useGetCourseData from "../../Hooks/ForSeller/useGetCourseData";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { mainURL } from "../../Constants/Constant.js";
import VideoUpldingLoader from "../ShimmerUI/VideoUpldingLoader.jsx";

export const VideoUploadBTN = ({ id, sectionID }) => {
  useGetCourseData();
  const video = useRef();
  const [uplodingBar, setUplodingBar] = useState(false);
  const [refresh, setRefresh] = useState(0);

  const uploadVideoBTN = async () => {
    try {
      setUplodingBar(true);
      const token = localStorage.getItem("jwtToken");
      const res = await axios.get(`${mainURL}/get-sinature`, {
        headers: {
          Authorization: `Brearer ${token}`,
        },
      });
      const formData = new FormData();
      formData.append("file", video.current.files[0]);
      formData.append("api_key", res.data.api_key);
      formData.append("timestamp", res.data.timestamp);
      formData.append("signature", res.data.signature);
      formData.append("folder", "course-videos");

      const cloudRes = await axios.post(
        `https://api.cloudinary.com/v1_1/${res.data.cloudName}/video/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const uploadingData = {
        cloudRes: cloudRes,
        sectionID: sectionID,
        courseID: id,
      };
      const uploadRes = await axios.post(
        `${mainURL}/video-uploder`,
        uploadingData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRefresh(refresh + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setUplodingBar(false);
    }
  };

  useGetCourseData(refresh);

  return (
    <div className="border border-gray-200 p-3 h-fit rounded-md">
      {uplodingBar && (
        <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
          <VideoUpldingLoader />
        </div>
      )}

      <form onSubmit={(e) => e.preventDefault()}>
        <input type="file" accept="video/*" ref={video} /> <br />
        <button
          className="p-2 bg-amber-300 rounded-md cursor-pointer mt-3"
          onClick={uploadVideoBTN}
        >
          Upload video
        </button>
      </form>
    </div>
  );
};

export default VideoUploadBTN;
