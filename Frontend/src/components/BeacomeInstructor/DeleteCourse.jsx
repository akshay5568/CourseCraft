import { useState } from "react";
import { DeleteCourseBTN } from "../../Constants/Constant.js";
import { useNavigate } from "react-router";
import Loading from "../ShimmerUI/Loading.jsx";

export const DeleteCourse = ({ courseId, thumbID }) => {
  const [ispop, setPOP] = useState(false);
  const redirect = useNavigate();
  const [videoDeleteLoading, setVideoDeleteLoading] = useState(false);

  return (
  <div className="relative">
  <button
    onClick={() => setPOP(!ispop)}
    className="rounded-lg bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-200 transition-all duration-200 cursor-pointer"
  >
    Delete Course
  </button>

  {videoDeleteLoading && (
    <div className="fixed inset-0 z-[100] bg-white/70 flex items-center justify-center">
      <Loading />
    </div>
  )}

  {ispop && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">
            Delete Course
          </h2>

          <button
            className="h-9 w-9 rounded-full hover:bg-gray-200 text-xl font-bold cursor-pointer transition"
            onClick={() => setPOP(false)}
          >
            ╳
          </button>
        </div>

        {/* Content */}
        <div className="px-5 py-6 text-center">
          <h3 className="text-sm sm:text-base font-medium text-gray-700 leading-relaxed">
            Are you sure you want to permanently delete this course?
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-gray-500">
            This action cannot be undone.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setPOP(false)}
              className="w-full rounded-xl border border-gray-300 bg-gray-100 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-all duration-200 cursor-pointer"
            >
              Cancel
            </button>

            <button
              onClick={() =>
                DeleteCourseBTN(
                  courseId.id,
                  thumbID,
                  redirect,
                  setVideoDeleteLoading,
                  setPOP
                )
              }
              className="w-full rounded-xl bg-red-500 py-3 text-sm font-semibold text-white hover:bg-red-600 transition-all duration-200 cursor-pointer"
            >
              Delete Permanently
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
</div>
  );
};
export default DeleteCourse;
