import { useRef } from "react";
import { signInLogo } from "../../Constants/Constant.js";
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
      <div className="min-h-screen bg-[#f7f9fa]">
      <Header />

      <div
        className="
          max-w-[1400px]
          mx-auto
          px-4
          md:px-8
          py-10
        "
      >
        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-12
          "
        >
          {/* LEFT SIDE IMAGE */}
          <div
            className="
              w-full
              lg:w-1/2
              flex
              justify-center
            "
          >
            <img
              src={signInLogo}
              alt="Sign In"
              className="
                w-full
                max-w-[550px]
                object-contain
              "
            />
          </div>

          {/* RIGHT SIDE FORM */}
          <div
            className="
              w-full
              lg:w-[450px]
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-6
              sm:p-8
              shadow-sm
            "
          >
            {/* HEADING */}
            <div>
              <h1
                className="
                  text-3xl
                  sm:text-4xl
                  font-bold
                  text-[#1c1d1f]
                  leading-tight
                "
              >
                Log in to continue your learning journey
              </h1>

              <p
                className="
                  mt-3
                  text-sm
                  text-[#6a6f73]
                "
              >
                Access your courses and continue learning.
              </p>
            </div>

            {/* FORM */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8"
            >
              {/* EMAIL */}
              <div className="mb-4">
                <input
                  ref={email}
                  type="email"
                  placeholder="Email"
                  className="
                    w-full
                    border
                    border-gray-300
                    rounded-lg
                    px-4
                    py-3
                    outline-none
                    focus:border-black
                    transition
                  "
                />
              </div>

              {/* PASSWORD */}
              <div className="mb-4">
                <input
                  ref={password}
                  type="password"
                  placeholder="Password"
                  className="
                    w-full
                    border
                    border-gray-300
                    rounded-lg
                    px-4
                    py-3
                    outline-none
                    focus:border-black
                    transition
                  "
                />
              </div>

              {/* ERROR */}
              {errorMsg && (
                <p
                  className="
                    text-sm
                    text-red-500
                    mb-4
                    font-medium
                  "
                >
                  {errorMsg}
                </p>
              )}

              {/* BUTTON */}
              <button
                onClick={() =>
                  buttonHandller(
                    email.current.value,
                    password.current.value,
                    setErrorMsg
                  )
                }
                className="
                  w-full
                  bg-[#a435f0]
                  hover:bg-[#8710d8]
                  transition
                  text-white
                  font-bold
                  py-3
                  rounded-lg
                  cursor-pointer
                "
              >
                Sign In
              </button>
            </form>

            {/* DIVIDER */}
            <div
              className="
                flex
                items-center
                gap-3
                my-6
              "
            >
              <div className="flex-1 h-px bg-gray-200"></div>

              <span
                className="
                  text-sm
                  text-gray-400
                "
              >
                OR
              </span>

              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* GOOGLE LOGIN */}
            <GoogleLogin />

            {/* SIGNUP */}
            <div
              className="
                mt-8
                text-center
                text-sm
                text-[#6a6f73]
              "
            >
              Don&apos;t have an account?

              <Link
                to={"/signup"}
                className="
                  ml-1
                  text-purple-700
                  font-semibold
                  hover:underline
                "
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
