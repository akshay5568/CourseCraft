import axios from "axios";
import { mainURL } from "../Constants/Constant";
import { addSellerData } from "../Slice/SellerReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import useRefreshLoginHandle from "./useRefreshLoginHandle";

export const useSellerSignup = () => {
  const sellerData = useSelector((state) => state.Seller?.sellerData);
  const userData = useSelector((state) => state.User?.data);
  const redirect = useNavigate();
  const dispatch = useDispatch();

  const sellerSignUpHandller = async () => {
    const token = localStorage.getItem("jwtToken");
      const res = await axios.post(`${mainURL}/become-seller`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(addSellerData(res.data));
      setTimeout(() => {
        redirect(`/seller-home-page/${sellerData?._id}`);
      }, 1000);
    
  };

  return { sellerSignUpHandller };
};
export default useSellerSignup;
