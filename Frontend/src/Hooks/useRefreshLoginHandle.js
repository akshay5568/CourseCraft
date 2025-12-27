import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUserData } from '../Slice/UserReducer';
import { mainURL } from '../Constants/Constant';
import axios from 'axios';

export const useRefreshLoginHandle = () => {
    const dispatch = useDispatch()
    const token = localStorage.getItem("jwtToken");
      useEffect(() => {
      async function getData(){
          const res = await axios.post(`${mainURL}/refresh/login`, {}, {
            headers:{
                Authorization: `Brearer ${token}`
            }
          })
          dispatch(addUserData(res.data));
       }
       getData();
  }, [])
  return {useRefreshLoginHandle}
}

export default useRefreshLoginHandle;