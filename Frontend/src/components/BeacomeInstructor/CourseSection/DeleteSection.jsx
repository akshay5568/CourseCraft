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
    console.log(res.data);
    setRefresh(refresh + 1);
     } catch (error) {
        console.log(error)
     }finally{
         setLoading(false);
     }
  };

  return (
    <div className="">
      {loading && (
         <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
             <Loading/>
         </div>
      )}

      <button
        onClick={sectiondeletePop}
        className="text-xs cursor-pointer font-semibold bg-amber-300 p-1 rounded-md"
      >
        Delete section
      </button>
      {sectionDeletePopUp && (
        <div className="absolute w-100 bg-gray-300 mt-3 p-3 rounded-md">
          <h1 className="font-semibold">
            Are you sure to delete this section?
          </h1>
          <div className="flex text-xs font-semibold gap-5 mt-3">
            <button
              onClick={() => setSectionDeltePopUp(false)}
              className="bg-amber-400 rounded-md p-1 cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={deleteSection}
              className="bg-amber-400 rounded-md p-1 cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default DeleteSection;
