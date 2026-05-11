import Header from "../Header/Header";
import useSellerSignup from "../../Hooks/useSellerSignup";
import {
  FaChalkboardTeacher,
} from "react-icons/fa";
export const SignUpPage = () => {
  const { sellerSignUpHandller } = useSellerSignup();
  return (
       <div
      className="
        min-h-screen
        bg-[#f7f9fa]
        pb-20
        md:pb-0
      "
    >
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
            flex-col-reverse
            lg:flex-row
            items-center
            justify-between
            gap-12
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              w-full
              lg:w-[50%]
              text-center
              lg:text-left
            "
          >
            {/* ICON */}
            <div
              className="
                w-20
                h-20
                bg-purple-100
                rounded-full
                flex
                items-center
                justify-center
                mx-auto
                lg:mx-0
              "
            >
              <FaChalkboardTeacher
                className="
                  text-4xl
                  text-purple-700
                "
              />
            </div>

            {/* HEADING */}
            <h1
              className="
                mt-6
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                text-[#1c1d1f]
                leading-tight
              "
            >
              Start Your Teaching
              Journey With
              {" "}
              <span className="text-purple-700">
                CourseCraft
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                text-sm
                sm:text-base
                text-[#6a6f73]
                leading-7
                max-w-xl
                mx-auto
                lg:mx-0
              "
            >
              Share your knowledge,
              create engaging
              courses, and inspire
              thousands of students
              around the world while
              building your teaching
              career.
            </p>

            {/* BUTTON */}
            <button
              onClick={
                sellerSignUpHandller
              }
              className="
                mt-8
                bg-purple-600
                hover:bg-purple-700
                transition
                text-white
                font-semibold
                px-8
                py-4
                rounded-2xl
                shadow-lg
                cursor-pointer
                text-sm
                sm:text-base
              "
            >
              Become an Instructor
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              w-full
              lg:w-[50%]
              flex
              justify-center
            "
          >
            <div
              className="
                w-full
                max-w-2xl
                overflow-hidden
                rounded-3xl
                shadow-2xl
                bg-white
              "
            >
              <img
                src="https://s.udemycdn.com/instructor/dashboard/video-creation-2x.jpg"
                alt="Instructor"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
