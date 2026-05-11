import { useRef, useState } from "react";
import { editFormEtnHandller } from "../../Constants/Constant.js";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import Loading from "../ShimmerUI/Loading.jsx";

export const EditCourseForm = ({
  setisEditTrue,
  isEditTrueValue,
  courseId,
}) => {
  const coursName = useRef();
  const description = useRef();
  const price = useRef();
  const thumbnail = useRef();
  const [loading,setLoading] = useState(false);
  const sellerId = useSelector(state => state.Seller?.sellerData?._id);

  const redirect = useNavigate();
  const [formEmptyError, setFormEmptyError] = useState();

  return (
   <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
  <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl overflow-y-auto max-h-[90vh]">
    
    {loading && (
      <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-50">
        <Loading />
      </div>
    )}

    {/* Header */}
    <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 sticky top-0 bg-white">
      <h1 className="text-lg sm:text-2xl font-bold text-gray-800">
        Edit Course
      </h1>

      <button
        onClick={() => setisEditTrue(!isEditTrueValue)}
        className="h-9 w-9 rounded-full hover:bg-gray-200 text-xl font-bold cursor-pointer transition"
      >
        ╳
      </button>
    </div>

    {/* Form */}
    <div className="p-5 sm:p-7">
      <form onSubmit={(e) => e.preventDefault()} className="space-y-5">

        {/* Course Name */}
        <div>
          <label
            htmlFor="courseName"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Course Name
          </label>

          <input
            required
            id="courseName"
            type="text"
            ref={coursName}
            className="w-full rounded-xl border border-gray-300 p-3 text-sm sm:text-base outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
            placeholder="Enter new course name"
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="dec"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Course Description
          </label>

          <textarea
            required
            id="dec"
            ref={description}
            rows={4}
            className="w-full rounded-xl border border-gray-300 p-3 text-sm sm:text-base outline-none resize-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
            placeholder="Enter new course description"
          />
        </div>

        {/* Price */}
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Course Price
          </label>

          <input
            required
            id="price"
            type="number"
            ref={price}
            className="w-full rounded-xl border border-gray-300 p-3 text-sm sm:text-base outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
            placeholder="Enter new course price"
          />
        </div>

        {/* Thumbnail */}
        <div>
          <label
            htmlFor="thum"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Course Thumbnail
          </label>

          <input
            required
            type="file"
            ref={thumbnail}
            placeholder="Thumbnail"
            name="thumbnail"
            className="w-full rounded-xl border border-dashed border-gray-400 bg-gray-50 p-3 text-sm cursor-pointer"
          />
        </div>

        {/* Error */}
        {formEmptyError && (
          <div className="rounded-lg bg-red-100 px-4 py-3 text-sm font-semibold text-red-600">
            {formEmptyError}
          </div>
        )}

        {/* Button */}
        <button
          onClick={() =>
            editFormEtnHandller(
              setFormEmptyError,
              coursName,
              price,
              description,
              courseId,
              thumbnail,
              setLoading,
              redirect,
              sellerId
            )
          }
          className="w-full rounded-xl bg-purple-600 py-3 text-sm sm:text-base font-semibold text-white hover:bg-purple-700 transition-all duration-200 cursor-pointer"
        >
          Update Course Details
        </button>
      </form>
    </div>
  </div>
</div>
  );
};

export default EditCourseForm;
