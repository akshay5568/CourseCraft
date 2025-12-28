import React from 'react'
import { useDispatch } from 'react-redux'
import { addUserData } from '../Slice/UserReducer';
import { useNavigate } from 'react-router';
import { addSellerData } from '../Slice/SellerReducer';

export const useLogout = () => {
    const dispatch = useDispatch();
    const redirect = useNavigate();
    const logoutHandle = () => {
         localStorage.removeItem("jwtToken");
         dispatch(addUserData({}))
         dispatch(addSellerData({}));
         redirect('/signin');
    }

  return {logoutHandle}
}

export default useLogout;