import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import VideoPopUpSection from "./VideoPopUpSection";
import { FaChevronDown } from "react-icons/fa";

export const CourseSections = ({ purechasedcourse }) => {
    console.log(purechasedcourse);

    const [sectionPopUp,setSectionPopUp] = useState({
        id:null,
        isValid:false
    });


    const popHandller = (sectionId) => {
         setSectionPopUp({id:sectionId,isValid:!sectionPopUp.isValid});
    }

  return (
    <div className="w-full">
      {purechasedcourse.map((section, index) => {
        return (
          <div>
            <button onClick={() => popHandller(section._id)} key={index} className="flex w-full text-sm font-semibold  bg-gray-300 p-2 rounded-md mt-2 items-center justify-between">
            <h1>{section.sectionName}</h1>    
            <h1>{sectionPopUp.isValid ? <FaChevronDown/> : <FaChevronRight/>}</h1>
            </button>
             {sectionPopUp.id == section._id ?  sectionPopUp.isValid ? <VideoPopUpSection courseVideos={section?.videos}/> : "" : ""}
          </div>
        );
      })}
    </div>
  );
};

export default CourseSections;
