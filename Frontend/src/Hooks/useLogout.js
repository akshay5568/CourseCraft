import React from 'react'
import { useDispatch } from 'react-redux'
import { addUserData } from '../Slice/UserReducer';
import { useNavigate } from 'react-router';

export const useLogout = () => {
    const dispatch = useDispatch();
    const redirect = useNavigate();
    const logoutHandle = () => {
         localStorage.clear();
         dispatch(addUserData({}))
         redirect('/signin');
    }

  return {logoutHandle}
}

export default useLogout;