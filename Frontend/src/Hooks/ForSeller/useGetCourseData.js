import { useEffect } from "react";
import { addCourseDetails } from "../../Slice/CourseDetailsReducer";
import { addCourseVideos } from "../../Slice/CourseVideoSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { mainURL } from "../../Constants/Constant";
import { useParams } from "react-router";

export const useGetCourseData = () => {
 const id = useParams();
  const dispatch = useDispatch();
  const getCourseData = async () => {
    const token = localStorage.getItem("jwtToken");
    try {
      const res = await axios.post(`${mainURL}/course-full-page`, id, {
        headers: {
          Authorization: `Brearer ${token}`,
        },
      });
      dispatch(addCourseDetails(res.data?.courseDetails));
      dispatch(addCourseVideos(res.data?.videoCourseDetails));
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