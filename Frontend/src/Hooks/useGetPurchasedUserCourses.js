import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { mainURL } from '../Constants/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { addUserPurchasedCourses } from '../Slice/UserReducer';
import useRefreshLoginHandle from './useRefreshLoginHandle';
export const useGetPurchasedUserCourses = (refResh) => {
    console.log(refResh);
    const userData = useSelector(state => state.User.data);
    const dispatch = useDispatch();

    const getUserCourses = async () => {
        const token = localStorage.getItem('jwtToken');
         const res = await axios.get(`${mainURL}/users-bought-courses/?userId=${userData?._id}`, {                 
             headers:{
                 Authorization:`Bearer ${token}`
             }
         });
         dispatch(addUserPurchasedCourses(res.data));
    }
    useEffect(() => {
            if(userData?._id != undefined){
                getUserCourses(); 
            }  
    }, [userData,refResh])
  return null;
}

export default useGetPurchasedUserCourses;    