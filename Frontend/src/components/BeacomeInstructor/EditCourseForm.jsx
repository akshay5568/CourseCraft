import { useRef, useState } from "react";
import { editFormEtnHandller } from "../../Constants/Constant.js";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export const EditCourseForm = ({
  setisEditTrue,
  isEditTrueValue,
  courseId,
}) => {
  const coursName = useRef();
  const description = useRef();
  const price = useRef();
  const thumbnail = useRef();

  const sellerId = useSelector(state => state.Seller?.sellerData?._id);

  const redirect = useNavigate();
  const [formEmptyError, setFormEmptyError] = useState();

  return (
    <div className="absolute z-40 w-[50%] top-50 left-80 h-fit bg-gray-300 p-5 rounded-md">
      <div>
        <button
          onClick={() => setisEditTrue(!isEditTrueValue)}
          className="font-semibold mb-3 cursor-pointer"
        >
          ╳
        </button>
      </div>
      <div className="">
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="courseName" className="text-sm font-semibold">
            Enter new course name:
          </label>
          <br />
          <input
            required
            id="courseName"
            type="text"
            ref={coursName}
            className="w-full mb-3 border border-black p-2 rounded-md"
            placeholder="Enter new course name"
          />
          <label htmlFor="dec" className="text-sm font-semibold">
            Enter new course Description:
          </label>
          <br />
          <input
            required
            id="dec"
            ref={description}
            type="text"
            className="w-full mb-3 border border-black p-2 rounded-md"
            placeholder="Enter new course Description"
          />
          <label htmlFor="price" className="text-sm font-semibold">
            Enter new course Price:
          </label>
          <br />
          <input
            required
            id="price"
            type="number"
            ref={price}
            className="w-full mb-3 border border-black p-2 rounded-md"
            placeholder="Enter new course Price"
          />
          <label htmlFor="thum" className="text-sm font-semibold">
            Enter new course thumbnail:
          </label>
          <br />
          <input
            required
            type="file"
            ref={thumbnail}
            placeholder="Thubmnail"
            name="thumbnail"
            className="w-full mb-3 border border-black p-2 rounded-md"
          />
          {formEmptyError && (
            <span className="text-red-500 test-xs font-bold">
              {formEmptyError}
            </span>
          )}
          <button
            onClick={() =>
              editFormEtnHandller(
                setFormEmptyError,
                coursName,
                price,
                description,
                courseId,
                thumbnail,
                redirect,
                sellerId
              )
            }
            className="m-auto w-full bg-amber-300 p-2 rounded-md text-sm font-semibold"
          >
            Update details
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCourseForm;
