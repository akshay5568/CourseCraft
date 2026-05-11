import { useRef, useState } from "react";
import SellerHeader from "./SellerHeader";
import { courseUploadBTN } from "../../Constants/Constant.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Loading from "../ShimmerUI/Loading.jsx";

export const CourseUploadPage = () => {
  const sellerData = useSelector((state) => state.Seller.sellerData);
  const courseName = useRef();
  const Price = useRef();
  const Dec = useRef();
  const thumbnail = useRef();

  const [loading,setLoading] = useState(false);

  const [progressBar, setProgressBar] = useState();
  const redirect = useNavigate();

  return (
      <div className="min-h-screen bg-[#f7f9fa]">
      {/* LOADING */}
      {loading && (
        <div
          className="
            fixed
            inset-0
            bg-white/70
            backdrop-blur-sm

            flex
            items-center
            justify-center

            z-50
          "
        >
          <Loading />
        </div>
      )}

      <SellerHeader />

      {/* MAIN */}
      <div
        className="
          w-full

          px-4
          sm:px-6
          md:px-10

          py-10
          md:py-16
        "
      >
        <div
          className="
            w-full
            max-w-3xl

            mx-auto

            bg-white

            border
            border-gray-200

            rounded-3xl

            shadow-sm

            p-5
            sm:p-8
            md:p-10
          "
        >
          {/* TITLE */}
          <div className="mb-8">
            <h1
              className="
                text-2xl
                sm:text-3xl

                font-bold

                text-[#1c1d1f]
              "
            >
              Create New Course
            </h1>

            <p
              className="
                mt-2

                text-sm
                sm:text-base

                text-[#6a6f73]
              "
            >
              Fill in the details
              below to upload your
              course.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={(e) =>
              e.preventDefault()
            }
            className="
              flex
              flex-col
              gap-6
            "
          >
            {/* COURSE NAME */}
            <div>
              <label
                className="
                  block

                  mb-2

                  text-sm
                  font-semibold

                  text-[#1c1d1f]
                "
              >
                Course Name
              </label>

              <input
                ref={courseName}
                className="
                  w-full

                  rounded-2xl

                  border
                  border-gray-300

                  bg-white

                  p-4

                  text-sm
                  sm:text-base

                  outline-none

                  focus:border-purple-500
                  focus:ring-2
                  focus:ring-purple-200

                  transition
                "
                type="text"
                placeholder="Enter course name"
                required
              />
            </div>

            {/* PRICE */}
            <div>
              <label
                className="
                  block

                  mb-2

                  text-sm
                  font-semibold

                  text-[#1c1d1f]
                "
              >
                Price
              </label>

              <input
                ref={Price}
                className="
                  w-full

                  rounded-2xl

                  border
                  border-gray-300

                  bg-white

                  p-4

                  text-sm
                  sm:text-base

                  outline-none

                  focus:border-purple-500
                  focus:ring-2
                  focus:ring-purple-200

                  transition
                "
                type="number"
                placeholder="Enter course price"
                required
              />
            </div>

            {/* DESCRIPTION */}
            <div>
              <label
                className="
                  block

                  mb-2

                  text-sm
                  font-semibold

                  text-[#1c1d1f]
                "
              >
                Description
              </label>

              <textarea
                ref={Dec}
                rows={5}
                className="
                  w-full

                  rounded-2xl

                  border
                  border-gray-300

                  bg-white

                  p-4

                  text-sm
                  sm:text-base

                  outline-none

                  resize-none

                  focus:border-purple-500
                  focus:ring-2
                  focus:ring-purple-200

                  transition
                "
                placeholder="Write a detailed course description"
                required
              />
            </div>

            {/* THUMBNAIL */}
            <div>
              <label
                className="
                  block

                  mb-2

                  text-sm
                  font-semibold

                  text-[#1c1d1f]
                "
              >
                Upload Thumbnail
              </label>

              <input
                type="file"
                ref={thumbnail}
                name="thumbnail"
                className="
                  w-full

                  rounded-2xl

                  border
                  border-dashed
                  border-gray-300

                  bg-gray-50

                  p-4

                  text-sm

                  cursor-pointer

                  file:mr-4
                  file:rounded-xl
                  file:border-0
                  file:bg-purple-100
                  file:px-4
                  file:py-2
                  file:text-sm
                  file:font-medium
                  file:text-purple-700

                  hover:file:bg-purple-200

                  transition
                "
                required
              />
            </div>

            {/* BUTTON */}
            <button
              onClick={() =>
                courseUploadBTN(
                  courseName,
                  Price,
                  Dec,
                  sellerData,
                  thumbnail,
                  setProgressBar,
                  redirect,
                  setLoading
                )
              }
              className="
                w-full

                bg-purple-600
                hover:bg-purple-700

                text-white

                font-semibold

                rounded-2xl

                py-4

                text-sm
                sm:text-base

                cursor-pointer

                transition
              "
            >
              {progressBar
                ? `Uploaded ${progressBar}%`
                : "Upload Course"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseUploadPage;
