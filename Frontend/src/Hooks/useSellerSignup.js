import axios from "axios";
import { mainURL } from "../Constants/Constant";
import { addSellerData } from "../Slice/SellerReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const useSellerSignup = () => {
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
    const { isUser } = res.data;
    console.log(isUser);
    dispatch(addSellerData(res.data));
    redirect(`/seller-home-page/${userData?._id}`);
  };
  return { sellerSignUpHandller };
};
export default useSellerSignup;
