import { useState } from "react";
import { DeleteCourseBTN } from "../../Constants/Constant.js";

export const DeleteCourse = ({ courseId, thumbID }) => {
  const [ispop, setPOP] = useState(false);
  return (
    <div>
      <button
        onClick={() => setPOP(!ispop)}
        className="text-red-500 font-bold text-bold text-sm cursor-pointer"
      >
        DeleteCourse
      </button>

      {ispop && (
        <div className="absolute w-87 h-50 p-3 bg-gray-200 left-140 rounded-md top-40">       
          <div>
            <button className="cursor-pointer" onClick={() => setPOP(false)}>
              ╳
            </button>
          </div>

          <h3 className="text-sm font-semibold text-center mt-6">
            Are you sure to delete this course parmanetly?
          </h3>

          <div className="flex gap-8 justify-center mt-7">
            <button
              onClick={() => setPOP(false)}
              className="cursor-pointer p-2 bg-purple-500 text-white rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={() => DeleteCourseBTN(courseId.id, thumbID)}
              className="p-2 bg-purple-500 text-white rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default DeleteCourse;
