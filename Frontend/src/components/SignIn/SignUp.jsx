import {useRef, useState } from "react";
import Header from "../Header/Header";
import { passwordEmailChecker, signInLogo } from "../../Constants/Constant";
import { Link } from "react-router";
import GoogleLogin from '../GoogleLogin/GoogleLogin'

export const SignUp = () => {
    const [errorMsg,setErrorMsg] = useState();
    const email = useRef();
    const password = useRef();
    const name = useRef();

    const buttonHandller = () => {
        if(email.current?.value == "" || password.current?.value == ""){
            return setErrorMsg("Please fill form before submit.");
        }
        const passAndEmailChecker = passwordEmailChecker(email.current?.value,password.current?.value);
        if(passAndEmailChecker != null){
            setErrorMsg(passAndEmailChecker);
            return;
        }else if(passAndEmailChecker == null){
        setErrorMsg("");
        console.log(email.current?.value);
        console.log(password.current?.value);
        const user = {
            name:name.current?.value,
            email:email.current?.value,
            password:password.current?.value
        }
        console.log(user);
        }
    }

  return (
    <div>
        <Header/>
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
              ref={name}
              type="name"
              className="bg-white p-3 rounded-md w-90 m-3 border border-black hover:bg-gray-100"
              placeholder="Name"
            />
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
              className=" m-3 bg-purple-300 w-90 p-3 rounded-md cursor-pointer hover:bg-purple-400"
              onClick={buttonHandller}
            >
              SignUp
            </button>
          </form>

            <div className="m-3 text-center w-90 ">
            <span className="mb-9 text-sm text-gray-400">
              ------------OR--------------
            </span>
            <GoogleLogin/>
          </div>

          <div className="m-3 text-1xl bg-[#e5e6ea] w-90 p-3 text-center font-semibold mt-10 rounded">
            <div><span>Do you have an account? 
                <Link to={'/signin'}><span className="text-blue-700 underline ml-1">Sign In</span></Link>
              </span></div>
        </div>
        </div>
      </div>
    </div>
  )


}

export default SignUp;