import axios from "axios";
import { useEffect } from "react";
import { mainURL } from "../Constants/Constant.js";
import { useDispatch, useSelector } from "react-redux";
import { addSellerData } from "../Slice/SellerReducer";


export const useRefreshSellerHandle = () => {

  const userData = useSelector(state => state.User?.data);
  const token = localStorage.getItem("jwtToken");
  const dispatch = useDispatch();

 
    async function refreshSeller() {
    const res = await axios.post(`${mainURL}/refresh-seller`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(addSellerData(res.data));
  }


  useEffect(() => {
      if(userData?.email){
        refreshSeller();
      }
  }, [userData]);

  return null;
};

export default useRefreshSellerHandle;
