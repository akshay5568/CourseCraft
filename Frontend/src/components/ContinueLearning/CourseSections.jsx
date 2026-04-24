import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import VideoPopUpSection from "./VideoPopUpSection";
import { FaChevronDown } from "react-icons/fa";

export const CourseSections = ({ purechasedcourse }) => {

  
  const [sectionPopUp, setSectionPopUp] = useState({
    id: null,
    isValid: false,
  });

  const popHandller = (sectionId) => {
    setSectionPopUp({ id: sectionId, isValid: !sectionPopUp.isValid });
  };

  return (
    <div className="w-full">
      {purechasedcourse.map((section, index) => {
        return (
          <div
            className="w-full border mt-3 border-gray-300 bg-gray-200"
            key={index}
          >
            <button
              onClick={() => popHandller(section?._id)}
              key={index}
              className="flex w-full text-sm font-semibold p-2 rounded-md  items-center gap-3"
            >
              <h1>{index + 1}</h1>
              <div className="w-full justify-between flex items-center">
                <h1>{section?.sectionName}</h1>
                <div className="flex items-center gap-2">
                  <span className="block text-[#5b5d73] font-extralight text-xs">
                    {section?.videos?.length} lectures
                  </span>
                  {section?._id == sectionPopUp.id ?
                    (sectionPopUp.isValid ? (
                      <FaChevronDown className="font-extralight text-xs text-[#5b5d73]" />
                    ) : (
                      <FaChevronRight className="font-extralight text-xs text-[#5b5d73]" />
                    )):  <FaChevronRight className="font-extralight text-xs text-[#5b5d73]" />}
                </div>
              </div>
            </button>
            {sectionPopUp?.id == section?._id ? (
              sectionPopUp.isValid ? (
                <VideoPopUpSection courseVideos={section?.videos} courseId={section?.courseId} />
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CourseSections;
