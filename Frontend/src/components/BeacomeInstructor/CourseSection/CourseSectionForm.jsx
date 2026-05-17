import axios from "axios";
import React from "react";
import { useState } from "react";
import { mainURL } from "../../../Constants/Constant";

export const CourseSectionForm = ({
  setCourseSectionForm,
  courseSectionForm,
  courseID,
  setRefresh,
  refresh,
}) => {
  const [sectionData, setSectionData] = useState({
    name: "",
    desc: "",
    courseID: courseID.id,
  });

  const createSection = async (e) => {
    if (sectionData.name == "" && sectionData.desc == "") {
      alert("please fill the proper section details.");
      return;
    }
    e.preventDefault();
    const token = localStorage.getItem("jwtToken");
    const res = await axios.post(
      `${mainURL}/section`,
      { sectionData },
      {
        headers: {
          Authorization: ` Breare ${token}`,
        },
      }
    );
    setCourseSectionForm(!courseSectionForm);
    setRefresh(refresh + 1);
    console.log(res.data);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-3">
      <div className="bg-[#e5e6ea] w-full sm:w-[90%] md:w-[70%] lg:w-[35%] rounded-md shadow-2xl">
        <form onSubmit={createSection} className="p-4 sm:p-5">
          <h1 className="text-lg sm:text-xl font-semibold mb-4">
            Create Course Section
          </h1>

          <input
            type="text"
            placeholder="Enter Section Name"
            className="border border-gray-500 p-2 sm:p-3 w-full rounded-md text-sm sm:text-base bg-white"
            value={sectionData.name}
            name="name"
            required
            onChange={(e) =>
              setSectionData({
                ...sectionData,
                [e.target.name]: e.target.value,
              })
            }
          />

          <br />

          <textarea
            type="text"
            name="desc"
            required
            placeholder="Section description"
            className="border border-gray-500 p-2 sm:p-3 w-full rounded-md mt-4 text-sm sm:text-base bg-white min-h-32 resize-none"
            value={sectionData.desc}
            onChange={(e) =>
              setSectionData({
                ...sectionData,
                [e.target.name]: e.target.value,
              })
            }
          />

          <div className="flex flex-col sm:flex-row gap-3 mt-5">
            <button
              type="submit"
              className="cursor-pointer text-sm font-semibold bg-amber-300 hover:bg-amber-400 rounded-md p-2 w-full"
            >
              Create Section
            </button>

            <button
              type="button"
              onClick={() => setCourseSectionForm(!courseSectionForm)}
              className="cursor-pointer text-sm font-semibold bg-gray-300 hover:bg-gray-400 rounded-md p-2 w-full"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseSectionForm;
