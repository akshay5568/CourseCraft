import { GoogleLogin } from "@react-oauth/google";
import { addUserData } from "../../Slice/UserReducer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
function Login() {
  
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const handleGoogleLogin = async (credentialResponse) => {
      const token = credentialResponse.credential;
      console.log(token);
      const res = await axios.post("http://localhost:8080/auth/google", {
        token,
      });
      console.log(res.data);
      dispatch(addUserData(res.data.payload));
      redirect('/');
      localStorage.setItem("jwtToken",res.data.jwtToken);
    };

  return (
    <GoogleLogin
      onSuccess={handleGoogleLogin}
      onError={() => console.log("FAILED")}
    />
  );
}

export default Login;
