import SellerHeader from "./SellerHeader";
import { Link, useParams } from "react-router";
import { useState } from "react";
import { useSelector } from "react-redux";
import EnrolledStudents from "./EnrolledStudents";
import EditCourseForm from "./EditCourseForm";
import { useGetCourseData } from "../../Hooks/ForSeller/useGetCourseData";
import DeleteCourse from "./DeleteCourse";
import VideoUploadBTN from "./VideoUploadBTN";
import VideoView from "./VideoView";
import CourseSectionForm from "./CourseSection/CourseSectionForm";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import CourseUploadPage from "./CourseUploadPage";
import DeleteSection from "./CourseSection/DeleteSection";
import Loading from "../ShimmerUI/Loading";

export const CourseEditPage = () => {
  const [refresh, setRefresh] = useState(0);
  useGetCourseData(refresh);
  const CourseDetails = useSelector((state) => state.CourseDetails.details);
  const CourseVideos = useSelector((state) => state.CourseVideo.videos);
  const id = useParams();

  const [sectionDiv, setSectionDiv] = useState({
    sectionId: "l",
    isTrue: false,
  });

  const sectionDropDown = (id, sectionID) => {
    setSectionDiv({ sectionId: sectionID, isTrue: !sectionDiv.isTrue });
  };

  const [courseSectionForm, setCourseSectionForm] = useState(false);
  const [isEditTrue, setIsEditTrue] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f9fa]">
      <SellerHeader />

      <div
        className="
          w-full

          flex
          flex-col
          xl:flex-row

          gap-5

          p-3
          md:p-5
        "
      >
        {/* LEFT SIDE */}
        <div
          className="
            w-full
            xl:w-1/2

            bg-white

            border
            border-gray-200

            rounded-3xl

            shadow-sm

            p-4
            md:p-6
          "
        >
          <h1
            className="
              text-2xl

              font-bold

              text-[#1c1d1f]

              mb-5
            "
          >
            Course Sections
          </h1>

          <div className="space-y-4">
            {CourseDetails?.sectionIds?.map(
              (section, index) => {
                return (
                  <div
                    key={section._id}
                    className="
                      border
                      border-gray-200

                      rounded-2xl

                      overflow-hidden

                      bg-[#f9fafb]
                    "
                  >
                    <button
                      onClick={() =>
                        sectionDropDown(
                          section._id,
                          section._id
                        )
                      }
                      className="
                        w-full

                        flex
                        items-center
                        justify-between

                        gap-3

                        p-4

                        cursor-pointer
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          gap-3

                          text-left
                        "
                      >
                        <span
                          className="
                            text-xs
                            font-semibold

                            bg-purple-100
                            text-purple-700

                            w-7
                            h-7

                            rounded-full

                            flex
                            items-center
                            justify-center
                          "
                        >
                          {index + 1}
                        </span>

                        <div>
                          <h1
                            className="
                              text-sm
                              md:text-base

                              font-semibold

                              text-[#1c1d1f]
                            "
                          >
                            {
                              section.sectionName
                            }
                          </h1>

                          <p
                            className="
                              text-xs

                              text-gray-500

                              mt-1
                            "
                          >
                            {
                              section.videos
                                .length
                            }{" "}
                            lectures
                          </p>
                        </div>
                      </div>

                      <div>
                        {sectionDiv.sectionId ==
                        section._id ? (
                          sectionDiv.isTrue ? (
                            <IoMdArrowDropdown className="text-xl text-gray-600" />
                          ) : (
                            <IoMdArrowDropright className="text-xl text-gray-600" />
                          )
                        ) : (
                          <IoMdArrowDropright className="text-xl text-gray-600" />
                        )}
                      </div>
                    </button>

                    {section._id ==
                      sectionDiv.sectionId &&
                      sectionDiv.isTrue && (
                        <div
                          className="
                            border-t
                            border-gray-200

                            bg-white

                            p-4
                          "
                        >
                          <div
                            className="
                              flex
                              flex-col
                              md:flex-row

                              md:items-center
                              md:justify-between

                              gap-3
                            "
                          >
                            <h1
                              className="
                                text-lg
                                md:text-xl

                                font-semibold

                                text-[#1c1d1f]
                              "
                            >
                              {
                                section.sectionDesc
                              }
                            </h1>

                            <DeleteSection
                              sectionID={
                                section._id
                              }
                              courseID={
                                CourseDetails._id
                              }
                              setRefresh={
                                setRefresh
                              }
                              refresh={
                                refresh
                              }
                            />
                          </div>

                          <div className="mt-5">
                            <VideoView
                              courseVideos={
                                section.videos
                              }
                              sectionID={
                                section._id
                              }
                            />
                          </div>

                          <div
                            className="
                              mt-5

                              border
                              border-dashed
                              border-gray-300

                              rounded-2xl

                              p-3
                            "
                          >
                            <VideoUploadBTN
                              id={
                                CourseDetails._id
                              }
                              sectionID={
                                section._id
                              }
                            />
                          </div>
                        </div>
                      )}
                  </div>
                );
              }
            )}
          </div>

          {/* CREATE SECTION */}
          <div
            className="
              mt-8

              border-t
              border-gray-200

              pt-6
            "
          >
            <div
              className="
                flex
                flex-col
                sm:flex-row

                sm:items-center

                gap-4
              "
            >
              <h1
                className="
                  font-semibold

                  text-[#1c1d1f]
                "
              >
                Create section for
                your course
              </h1>

              <button
                className="
                  bg-purple-600

                  hover:bg-purple-500

                  text-white

                  text-sm
                  font-semibold

                  px-5
                  py-2

                  rounded-xl

                  cursor-pointer

                  transition-all
                "
                onClick={() =>
                  setCourseSectionForm(
                    !courseSectionForm
                  )
                }
              >
                Create Section
              </button>
            </div>

            {courseSectionForm && (
              <div className="mt-5">
                <CourseSectionForm
                  setCourseSectionForm={
                    setCourseSectionForm
                  }
                  courseSectionForm={
                    courseSectionForm
                  }
                  courseID={id}
                  setRefresh={
                    setRefresh
                  }
                  refresh={refresh}
                />
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            w-full
            xl:w-1/2

            bg-white

            border
            border-gray-200

            rounded-3xl

            shadow-sm

            p-4
            md:p-6
          "
        >
          <div
            className="
              flex
              flex-col
              sm:flex-row

              sm:items-center
              sm:justify-between

              gap-4
            "
          >
            <h1
              className="
                text-2xl

                font-bold

                text-[#1c1d1f]
              "
            >
              Course Information
            </h1>

            <DeleteCourse
              courseId={id}
            />
          </div>

          <div
            className="
              mt-8

              space-y-5
            "
          >
            {/* COURSE NAME */}
            <div>
              <label
                htmlFor="courseName"
                className="
                  text-sm
                  font-semibold

                  text-gray-700
                "
              >
                Course Name
              </label>

              <input
                className="
                  w-full

                  mt-2

                  p-4

                  rounded-2xl

                  border
                  border-gray-200

                  bg-gray-50

                  text-gray-500

                  cursor-not-allowed
                "
                type="text"
                id="courseName"
                value={
                  CourseDetails?.courseName
                }
                disabled
              />
            </div>

            {/* DESCRIPTION */}
            <div>
              <label
                className="
                  text-sm
                  font-semibold

                  text-gray-700
                "
              >
                Description
              </label>

              <textarea
                value={
                  CourseDetails?.description
                }
                disabled
                className="
                  w-full

                  mt-2

                  p-4

                  min-h-[120px]

                  rounded-2xl

                  border
                  border-gray-200

                  bg-gray-50

                  text-gray-500

                  resize-none

                  cursor-not-allowed
                "
              />
            </div>

            {/* PRICE */}
            <div>
              <label
                className="
                  text-sm
                  font-semibold

                  text-gray-700
                "
              >
                Price
              </label>

              <input
                className="
                  w-full

                  mt-2

                  p-4

                  rounded-2xl

                  border
                  border-gray-200

                  bg-gray-50

                  text-gray-500

                  cursor-not-allowed
                "
                type="text"
                value={`₹${CourseDetails?.price}`}
                disabled
              />
            </div>

            {/* EDIT BUTTON */}
            <button
              onClick={() =>
                setIsEditTrue(
                  !isEditTrue
                )
              }
              className="
                mt-3

                bg-amber-400
                hover:bg-amber-300

                px-6
                py-3

                rounded-2xl

                text-sm
                font-semibold

                cursor-pointer

                transition-all
              "
            >
              Edit Course
            </button>
          </div>

          {/* STUDENTS */}
          <div className="mt-10">
            <EnrolledStudents
              EnrolledStudents={
                CourseDetails?.enrolledStudents
              }
            />
          </div>
        </div>
      </div>

      {/* EDIT FORM */}
      {isEditTrue && (
        <EditCourseForm
          setisEditTrue={
            setIsEditTrue
          }
          isEditTrueValue={
            isEditTrue
          }
          courseId={id}
        />
      )}
    </div>
  );
};
export default CourseEditPage;
