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
  const [videoDescription, setVideoDescription] = useState("");
  const [refresh, setRefresh] = useState(0);
  console.log(videoDescription);
  const uploadVideoBTN = async () => {
    try {
      setUplodingBar(true);
      if (!video.current.files[0]) return alert("Please select video");
      if(videoDescription == "") return alert("Please provide video description");
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
        videoDescription: videoDescription,
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
      setVideoDescription("");
      setRefresh(refresh + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setUplodingBar(false);
    }
  };

  useGetCourseData(refresh);

  return (
    <div className="relative w-full rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
  
  {uplodingBar && (
    <div className="fixed inset-0 z-[100] bg-white/70 flex items-center justify-center">
      <VideoUpldingLoader />
    </div>
  )}

  {/* Header */}
  <div className="border-b border-gray-200 px-4 py-4 sm:px-6">
    <h1 className="text-lg sm:text-xl font-bold text-gray-800">
      Upload New Video
    </h1>

    <p className="mt-1 text-xs sm:text-sm text-gray-500">
      Add lecture videos to your course section.
    </p>
  </div>

  {/* Form */}
  <div className="p-4 sm:p-6">
    <form
      onSubmit={(e) => e.preventDefault()}
      className="space-y-5"
    >
      
      {/* Video Upload */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Select Video
        </label>

        <input
          type="file"
          accept="video/*"
          ref={video}
          className="w-full rounded-xl border border-dashed border-gray-400 bg-gray-50 p-3 text-sm cursor-pointer"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Video Description
        </label>

        <textarea
          required
          value={videoDescription}
          onChange={(e) => setVideoDescription(e.target.value)}
          rows={5}
          placeholder="Write a short description about this lecture..."
          className="w-full rounded-xl border border-gray-300 p-3 text-sm sm:text-base resize-none outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
        ></textarea>
      </div>

      {/* Upload Button */}
      <button
        className="w-full rounded-xl bg-purple-600 py-3 text-sm sm:text-base font-semibold text-white hover:bg-purple-700 transition-all duration-200 cursor-pointer"
        onClick={uploadVideoBTN}
      >
        Upload Video
      </button>
    </form>
  </div>
</div>
  );
};

export default VideoUploadBTN;
