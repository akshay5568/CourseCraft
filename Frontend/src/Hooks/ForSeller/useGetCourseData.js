import { useEffect } from "react";
import { addCourseDetails } from "../../Slice/CourseDetailsReducer";
import { addCourseVideos } from "../../Slice/CourseVideoSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { mainURL } from "../../Constants/Constant.js";
import { useParams } from "react-router";
import { useState } from "react";

export const useGetCourseData = () => {
 const id = useParams();
  const dispatch = useDispatch();
  const getCourseData = async () => {
    const token = localStorage.getItem("jwtToken");
    try {
      const courseDetails = await axios.post(`${mainURL}/course-full-page`, id, {
        headers: {
          Authorization: `Brearer ${token}`,
        },
      });
      dispatch(addCourseDetails(courseDetails.data?.courseDetails));
      dispatch(addCourseVideos(courseDetails.data?.videoCourseDetails));
    } catch (e) {
      console.log("Error", e);
    }
  };

  useEffect(() => {
    getCourseData();
  }, []);
  return null;
};


export default useGetCourseData;