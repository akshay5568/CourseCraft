import React from 'react'
import { mainURL, passwordEmailChecker } from '../Constants/Constant';
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
          console.log(user);
          const res = await axios.post(`${mainURL}/login`,user);
          console.log(res);
          dispatch(addUserData(res.data));
          console.log("Working")
          redirect('/');
          }
      }

      return {buttonHandller};
}
