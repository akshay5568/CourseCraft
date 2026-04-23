import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { mainURL } from '../Constants/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { addUserPurchasedCourses } from '../Slice/UserReducer';
import useRefreshLoginHandle from './useRefreshLoginHandle';
export const useGetPurchasedUserCourses = (ids) => {
    console.log("knknk")
    const userData = useSelector(state => state.User.data);
    const dispatch = useDispatch();

    const getUserCourses = async () => {
        const token = localStorage.getItem('jwtToken');
         const res = await axios.get(`${mainURL}/users-bought-courses/?userId=${userData?._id}`, {                 
             headers:{
                 Authorization:`Bearer ${token}`
             }
         });
         console.log(res.data);
         dispatch(addUserPurchasedCourses(res.data));
    }
    useEffect(() => {
            if(userData?._id != undefined){
                getUserCourses(); 
            }  
    }, [userData,ids])
  return null;
}

export default useGetPurchasedUserCourses;    