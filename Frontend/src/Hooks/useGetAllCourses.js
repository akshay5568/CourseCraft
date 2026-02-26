import { useDispatch, useSelector } from "react-redux";
import { useEffect} from 'react';
import { allCoursesForHomePage } from "../Slice/CourseDetailsReducer";
import axios from "axios";
import { mainURL } from "../Constants/Constant.js";

export const useGetAllCourses = () => {
    const userData = useSelector(state => state.User.data);

   const dispatch = useDispatch();
     const getAllCourses = async () => {
      try {
        const res = await axios.get(`${mainURL}/courses`);
        console.log("all", res.data);
        dispatch(allCoursesForHomePage(res.data));   
      } catch (error) {
          console.log(error)
      }
   }

   useEffect(() => {
            getAllCourses();
   }, [userData])

  return null;
}


export default useGetAllCourses;