import axios from "axios";
import React from "react";
import { useState } from "react";
import { mainURL } from "../../../Constants/Constant";
import Loading from "../../ShimmerUI/Loading";

export const DeleteSection = ({ sectionID, setRefresh, refresh, courseID }) => {
  const [sectionDeletePopUp, setSectionDeltePopUp] = useState(false);
  const [loading,setLoading] = useState(false);

  const sectiondeletePop = () => {
    setSectionDeltePopUp(!sectionDeletePopUp);
  };

  const deleteSection = async () => {
     try {
      setLoading(true);
      setSectionDeltePopUp(false);
      const token = localStorage.getItem("jwtToken");
    const res = await axios.delete(`${mainURL}/section/${sectionID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        courseID: courseID,
      },
    });
    setRefresh(refresh + 1);
     } catch (error) {
        console.log(error)
     }finally{
         setLoading(false);
     }
  };

  return (
   <div className="relative">
      {loading && (
        <div className="fixed inset-0 z-50 bg-white/70 flex items-center justify-center">
          <Loading />
        </div>
      )}

      <button
        onClick={sectiondeletePop}
        className="text-xs sm:text-sm cursor-pointer font-semibold bg-amber-300 hover:bg-amber-400 px-2 py-1 rounded-md"
      >
        Delete section
      </button>

      {sectionDeletePopUp && (
        <div className="fixed inset-0 z-40 bg-black/40 flex items-center justify-center px-3">
          <div className="bg-gray-300 w-full sm:w-[90%] md:w-[70%] lg:w-[30%] rounded-md p-4 shadow-2xl">
            <h1 className="font-semibold text-sm sm:text-base text-center">
              Are you sure to delete this section?
            </h1>

            <div className="flex flex-col sm:flex-row text-sm font-semibold gap-3 mt-5">
              <button
                onClick={() => setSectionDeltePopUp(false)}
                className="bg-amber-400 hover:bg-amber-500 rounded-md p-2 cursor-pointer w-full"
              >
                Cancel
              </button>

              <button
                onClick={deleteSection}
                className="bg-red-500 hover:bg-red-600 text-white rounded-md p-2 cursor-pointer w-full"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default DeleteSection;
