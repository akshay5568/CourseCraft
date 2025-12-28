import { GoogleLogin } from "@react-oauth/google";
import { addUserData } from "../../Slice/UserReducer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { mainURL } from "../../Constants/Constant";
function Login() {
  
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const handleGoogleLogin = async (credentialResponse) => {
      const token = credentialResponse.credential;
      const res = await axios.post(`${mainURL}/auth/google`, {
        token,
      });
      localStorage.setItem("jwtToken",res.data.jwtToken);
      dispatch(addUserData(res.data.payload));
      redirect('/');
    };

  return (
    <GoogleLogin
      onSuccess={handleGoogleLogin}
      onError={() => console.log("FAILED")}
    />
  );
}

export default Login;
