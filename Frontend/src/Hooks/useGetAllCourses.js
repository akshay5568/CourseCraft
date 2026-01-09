import { useDispatch } from "react-redux";
import { useEffect} from 'react';
import { allCoursesForHomePage } from "../Slice/CourseDetailsReducer";
import axios from "axios";
import { mainURL } from "../Constants/Constant.js";

export const useGetAllCourses = () => {
   const dispatch = useDispatch();
     const getAllCourses = async () => {
      try {
        const res = await axios.get(`${mainURL}/courses`);
        dispatch(allCoursesForHomePage(res.data));   
      } catch (error) {
          console.log(error)
      }
   }

   useEffect(() => {
            getAllCourses();
   }, [])

  return null;
}


export default useGetAllCourses;