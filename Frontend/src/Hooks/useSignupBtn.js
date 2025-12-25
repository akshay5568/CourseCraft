import { useDispatch } from "react-redux";
import { mainURL, passwordEmailChecker } from "../Constants/Constant";
import { addUserData } from "../Slice/UserReducer";
import axios from "axios";


export const useSignupBtn = () => {
     const dispatch = useDispatch();

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
      console.log(email);
      console.log(password);
      const user = {
        name: name,
        email: email,
        password: password,
      };
      console.log(user);
      const res = await axios.post(`${mainURL}/signup`, user);
      console.log(res);
      dispatch(addUserData(res.data));
    }
  };


  return {buttonHandller};

}
