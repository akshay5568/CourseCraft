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
      {purechasedcourse.map(
        (section, index) => {
          const isOpen =
            sectionPopUp?.id ===
              section?._id &&
            sectionPopUp?.isValid;

          return (
            <div
              key={index}
              className="
                w-full
                mb-3
                border
                border-gray-200
                rounded-xl
                overflow-hidden
                bg-white
                shadow-sm
              "
            >
              {/* SECTION HEADER */}
              <button
                onClick={() =>
                  popHandller(
                    section?._id
                  )
                }
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  gap-3
                  px-4
                  py-4
                  hover:bg-gray-50
                  transition
                  cursor-pointer
                "
              >
                {/* LEFT */}
                <div
                  className="
                    flex
                    items-center
                    gap-4
                    min-w-0
                  "
                >
                  {/* INDEX */}
                  <div
                    className="
                      w-8
                      h-8
                      rounded-full
                      bg-purple-100
                      text-purple-700
                      flex
                      items-center
                      justify-center
                      text-sm
                      font-bold
                      shrink-0
                    "
                  >
                    {index + 1}
                  </div>

                  {/* SECTION NAME */}
                  <div className="text-left">
                    <h1
                      className="
                        text-sm
                        md:text-base
                        font-semibold
                        text-[#1c1d1f]
                        break-words
                      "
                    >
                      {
                        section?.sectionName
                      }
                    </h1>

                    <span
                      className="
                        text-xs
                        text-[#6a6f73]
                      "
                    >
                      {
                        section?.videos
                          ?.length
                      }{" "}
                      lectures
                    </span>
                  </div>
                </div>

                {/* RIGHT */}
                <div
                  className="
                    text-xs
                    text-[#6a6f73]
                    shrink-0
                  "
                >
                  {isOpen ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}
                </div>
              </button>

              {/* VIDEO SECTION */}
              {isOpen && (
                <div
                  className="
                    bg-[#fafafa]
                    px-2
                    pb-2
                  "
                >
                  <VideoPopUpSection
                    courseVideos={
                      section?.videos
                    }
                    courseId={
                      section?.courseId
                    }
                  />
                </div>
              )}
            </div>
          );
        }
      )}
    </div>
  );
};

export default CourseSections;
