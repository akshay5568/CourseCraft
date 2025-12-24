import { GoogleLogin } from "@react-oauth/google";
import { addUserData } from "../../Slice/UserReducer";
import axios from "axios";
import { useDispatch } from "react-redux";
function Login() {
  
  const dispatch = useDispatch();
  const handleGoogleLogin = async (credentialResponse) => {
      const token = credentialResponse.credential;
      console.log(token);
      const res = await axios.post("http://localhost:8080/auth/google", {
        token,
      });
      console.log(res.data);
      dispatch(addUserData(res.data.payload));
      console.log(res.data.jwtToken)
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
