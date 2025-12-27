import Header from "../Header/Header";
import useSellerSignup from "../../Hooks/useSellerSignup";

export const SignUpPage = () => {
  const { sellerSignUpHandller } = useSellerSignup();
  return (
    <div>
      <Header />
      <div className="m-10 mr-30">
        <div className="flex justify-between items-center">
          <div>
            <img
              src="https://s.udemycdn.com/instructor/dashboard/video-creation-2x.jpg"
              alt=""
            />
          </div>

          <div className="">
            <span className="text-4xl font-semibold text-gray-600">
              Let's start your teaching journay with <br />
              CourseCraft
            </span>
            <br />
            <br />

            <button
              onClick={sellerSignUpHandller}
              className="bg-purple-400 hover:bg-purple-200 hover:text-purple-400 font-extralight cursor-pointer p-3 text-xl rounded-md text-white "
            >
              Click Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
