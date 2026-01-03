import React, { useRef, useState } from "react";
import SellerHeader from "./SellerHeader";
import axios from "axios";
import { mainURL } from "../../Constants/Constant";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const CourseUploadPage = () => {
  const sellerData = useSelector((state) => state.Seller.sellerData);
  const courseName = useRef();
  const Price = useRef();
  const Dec = useRef();
  const thumbnail = useRef();

  const [progressBar, setProgressBar] = useState();
  const redirect = useNavigate();

  const submitBTN = async () => {
    const courseDetails = {
      courseName: courseName.current.value,
      Price: Price.current.value,
      Dec: Dec.current.value,
      sellerData: sellerData,
    };

    const formData = new FormData();
    formData.append("courseDetails", JSON.stringify(courseDetails));
    formData.append("thumbnail", thumbnail.current.files[0]);
    console.log(formData);
    
    const token = localStorage.getItem("jwtToken");
    const res = await axios.post(`${mainURL}/course-create`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      onUploadProgress: (e) => {
        const progress = Math.round((e.loaded * 100) / e.total);
        setProgressBar(progress);
      },
    });
    console.log(res.data);
    redirect('/course-video-upload');
  };

  return (
    <div className="w-full">
      <SellerHeader />

      <h1>Start creating course via filling form</h1>
      <div className="flex p-3 w-[40%] bg-gray-100 rounded-md m-auto mt-40">
        <form onSubmit={(e) => e.preventDefault()} className="m-auto">
          <input ref={courseName} className="w-full rounded-md p-2 m-3 border-red-200 border-2" type="text" placeholder="Course Name" />
          <br />
          <input ref={Price} className="w-full rounded-md p-2 m-3 border-red-200 border-2" type="Number" placeholder="Price" />
          <br />
          <input className="w-full p-2 m-3 rounded-md border-red-200 border-2" ref={Dec} type="text" placeholder="Description" />
          <br />
          <input
            type="file"
            ref={thumbnail}
            placeholder="Thubmnail"
            name="thumbnail"
            className="w-full p-2 m-3 border-red-200 rounded-md border-2"
          />
          <br />
          <button onClick={submitBTN} className="w-full p-2 m-3 border-gray-200 rounded-xl hover:bg-gray-300 border-2">
            {progressBar ? `Uploaded ${progressBar}%` : "Upload"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseUploadPage;
