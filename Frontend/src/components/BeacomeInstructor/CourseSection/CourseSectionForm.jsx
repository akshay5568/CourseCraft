import axios from "axios";
import React from "react";
import { useState } from "react";
import { mainURL } from "../../../Constants/Constant";

export const CourseSectionForm = ({setCourseSectionForm,courseSectionForm,courseID,setRefresh,refresh}) => {
  const [sectionData, setSectionData] = useState({
    name: "",
    desc: "",
    courseID:courseID.id,
  });
 
  const createSection = async (e) => {
    if(sectionData.name == "" && sectionData.desc == ""){
        alert("please fill the proper section details.");
        return;
    }
    e.preventDefault();
    const token = localStorage.getItem('jwtToken');
      const res = await axios.post(`${mainURL}/section`, {sectionData},{
         headers:{
            Authorization:` Breare ${token}`
         }
      })
      setCourseSectionForm(!courseSectionForm);
      setRefresh(refresh + 1);
      console.log(res.data)
  };

  return (
    <div className="absolute bg-[#e5e6ea] w-[35%] flex justify-center rounded-md">
      
      <form onSubmit={createSection} className="p-3">
        <input
          type="text"
          placeholder="Enter Section Name"
          className="border border-gray-500 p-2 w-100 rounded-md"
          value={sectionData.name}
          name="name"
          required
          onChange={(e) => setSectionData({...sectionData, [e.target.name] : e.target.value})}
        />
        <br />
        <textarea
          type="text"
          name="desc"
          required
          placeholder="Section description"
          className="border border-gray-500 p-2 w-100 rounded-md mt-3"
          value={sectionData.desc}
          onChange={(e) => setSectionData({...sectionData, [e.target.name]:e.target.value})}
        />
        <br />
        <button className="cursor-pointer text-xs font-semibold bg-amber-300 rounded-md p-1 mt-3 ">
          Create Section
        </button>
      </form>
    </div>
  );
};

export default CourseSectionForm;
