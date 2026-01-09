import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUserData } from "../Slice/UserReducer";
import { mainURL } from "../Constants/Constant.js";
import axios from "axios";

export const useRefreshLoginHandle = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("jwtToken");

   async function getData() {
      const res = await axios.post(
        `${mainURL}/refresh/login`,
        {},
        {
          headers: {
            Authorization: `Brearer ${token}`,
          },
        }
      );
      dispatch(addUserData(res.data));
    }

  useEffect(() => {
    getData();
  }, []);
  
  return null;
};

export default useRefreshLoginHandle;
