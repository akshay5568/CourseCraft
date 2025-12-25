import { useRef } from "react";
import { signInLogo } from "../../Constants/Constant";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import  GoogleLogin  from "../GoogleLogin/GoogleLogin";
import { useState } from "react";
import { useSignInBtn } from "../../Hooks/useSignInBtn";

export const SignIn = () => {
  const [errorMsg,setErrorMsg] = useState();
  const email = useRef();
  const password = useRef();

  const {buttonHandller} = useSignInBtn();

  return (
    <div>
      <Header />
      <div className="w-full flex items-center justify-between">
        <div className="w-[40%] mt-15 ml-20">
          <img className="w-full" src={signInLogo} alt="" />
        </div>
        <div className="w-[50%] mt-10 ml-20">
          <h1 className="m-3 text-4xl font-extrabold">
            Log in to continue your <br />
            learning journey
          </h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              ref={email}
              type="email"
              className="bg-white p-3 rounded-md w-90 m-3 border border-black hover:bg-gray-100"
              placeholder="Email"
            />
            <br />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="bg-white w-90 m-3 p-3 rounded-md border border-black hover:bg-gray-100"
            />
            <br />
            {errorMsg && <span className="m-3 w-90 font-semibold text-sm text-red-600">{errorMsg}</span>}<br/>
          
            <button
              onClick={() => buttonHandller(email.current.value,password.current.value,setErrorMsg)}
              className=" m-3 bg-purple-300 w-90 p-3 rounded-md cursor-pointer hover:bg-purple-400"
            >
              SignIn
            </button>
          </form>

          <div className="m-3 text-center w-90 ">
            <span className="mb-9 text-sm text-gray-400">
              ------------OR--------------
            </span>
            <GoogleLogin/>
          </div>

          <div className="m-3 text-1xl bg-[#e5e6ea] w-90 p-3 text-center font-semibold mt-10 rounded">
            <div>
              <span>
                Don't have an account?
                <Link to={"/signup"}>
                  <span className="text-blue-700 underline ml-1">Sign up</span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
