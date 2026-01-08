import { useRef, useState } from "react";
import SellerHeader from "./SellerHeader";
import { courseUploadBTN } from "../../Constants/Constant";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const CourseUploadPage = () => {
  const sellerData = useSelector((state) => state.Seller.sellerData);
  const courseName = useRef();
  const Price = useRef();
  const Dec = useRef();
  const thumbnail = useRef();

  const [progressBar, setProgressBar] = useState();
  const redirect = useNavigate();

  return (
    <div className="w-full">
      <SellerHeader />
      <div className=" p-3 w-[40%] bg-gray-100 rounded-md m-auto mt-40">
        <h1 className="m-3 text-xl font-bold">
          Start creating course via filling form
        </h1>
        <div className="flex">
          <form onSubmit={(e) => e.preventDefault()} className="m-auto">
            <label className="m-3 text-sm font-semibold">Course Name: </label>
            <input
              ref={courseName}
              className="w-full rounded-md p-2 m-3 border-red-200 border-2"
              type="text"
              placeholder="Course Name"
            />
            <br />
            <label className="m-3 text-sm font-semibold">Price: </label>
            <input
              ref={Price}
              className="w-full rounded-md p-2 m-3 border-red-200 border-2"
              type="Number"
              placeholder="Price"
            />
            <br />
            <label className="m-3 text-sm font-semibold">Description: </label>
            <input
              className="w-full p-2 m-3 rounded-md border-red-200 border-2"
              ref={Dec}
              type="text"
              placeholder="Description"
            />
            <br />
            <label className="m-3 font-semibold text-sm">
              Upload Course Thumbnail:{" "}
            </label>
            <input
              type="file"
              ref={thumbnail}
              placeholder="Thubmnail"
              name="thumbnail"
              className="w-full p-2 m-3 border-red-200 rounded-md border-2"
            />
            <br />
            <button
              onClick={() =>
                courseUploadBTN(
                  courseName,
                  Price,
                  Dec,
                  sellerData,
                  thumbnail,
                  setProgressBar,
                  redirect
                )
              }
              className="w-full text-sm font-bold cursor-pointer p-2 m-3 border-gray-200 rounded-xl hover:bg-gray-300 border-2"
            >
              {progressBar ? `Uploaded ${progressBar}%` : "Upload"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseUploadPage;
