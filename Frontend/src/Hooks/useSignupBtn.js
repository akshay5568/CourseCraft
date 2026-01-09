import { useDispatch } from "react-redux";
import { mainURL, passwordEmailChecker } from "../Constants/Constant.js";
import { addUserData } from "../Slice/UserReducer";
import axios from "axios";
import { useNavigate } from "react-router";



export const useSignupBtn = () => {
     const dispatch = useDispatch();
      const redirect = useNavigate();

      
    const buttonHandller = async (email,password,name,setErrorMsg) => {
    if (email == "" || password == "") {
      return setErrorMsg("Please fill form before submit.");
    }
    const passAndEmailChecker = passwordEmailChecker(
      email,
      password
    );
    if (passAndEmailChecker != null) {
      setErrorMsg(passAndEmailChecker);
      return;
    } else if (passAndEmailChecker == null) {
      setErrorMsg("");
      const user = {
        name: name,
        email: email,
        password: password,
      };
      const res = await axios.post(`${mainURL}/signup`, user);
      localStorage.setItem("jwtToken",res.data.jwtToken);
      dispatch(addUserData(res.data));
      redirect('/');
    }
  };


  return {buttonHandller};

}
