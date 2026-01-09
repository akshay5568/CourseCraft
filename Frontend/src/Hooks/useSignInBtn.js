import React from 'react'
import { mainURL, passwordEmailChecker } from '../Constants/Constant.js';
import { addUserData } from '../Slice/UserReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';

export const useSignInBtn = () => {
    const dispatch = useDispatch();
    const redirect = useNavigate();

    const buttonHandller = async (email,password,setErrorMsg) => {
          if(email == "" || password == ""){
              return setErrorMsg("Please fill form before submit.");
          }
          const passAndEmailChecker = passwordEmailChecker(email,password);
          if(passAndEmailChecker != null){
              setErrorMsg(passAndEmailChecker);
              return;
          }else if(passAndEmailChecker == null){
          setErrorMsg("");
          const user = {
              email:email,
              password:password
          }
          const res = await axios.post(`${mainURL}/login`,user);
          dispatch(addUserData(res.data));
          localStorage.setItem("jwtToken",res.data.jwtToken);
          redirect('/');
          }
      }

      return {buttonHandller};
}
