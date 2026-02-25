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
    <div>
      <SellerHeader />
      <div className="h-screen w-full p-3 gap-3 flex">
        <div className="w-1/2  border rounded-md p-3 overflow-scroll">
          <h1 className="text-gray-600 text-xl font-bold">Videos</h1>  

          <div>
            {CourseDetails?.sectionIds?.map((section, index) => {
              return (
                <div key={section._id} className="mt-3">
                  <button
                    onClick={() => sectionDropDown(section._id, section._id)}
                    className="bg-gray-300 w-full p-3 rounded-md flex justify-between items-center text-xl"
                  >
                    <h1 className="font-semibold">{section.sectionName}</h1>
                    {sectionDiv.sectionId == section._id ? (
                      sectionDiv.isTrue ? <IoMdArrowDropdown /> :  <IoMdArrowDropright className="text-2xl" />               
                    ) : (
                      <IoMdArrowDropright className="text-2xl" />
                    )}
                  </button>

                  {section._id == sectionDiv.sectionId
                    ? sectionDiv.isTrue && (
                        <div className="p-3 border rounded-md">
                          <div className="flex justify-between w-full">
                              <h1 className="w-[80%] text-2xl mb-7 font-semibold">{section.sectionDesc}</h1>
                              <DeleteSection/>
                          </div>
                          <VideoView courseVideos={section.videos} sectionID={section._id}/>
                          <div className="mt-3"><VideoUploadBTN id={CourseDetails._id} sectionID={section._id}/></div>
                        </div>
                      )
                    : ""}
                </div>
              );
            })}
          </div>

          <div className="mt-3">
            <div className="flex gap-4 items-center">
              <h1 className="font-bold">Create section for your course.</h1>
              <button
                className="font-semibold bg-amber-400 p-1 rounded-md cursor-pointer"
                onClick={() => setCourseSectionForm(!courseSectionForm)}
              >
                Create section
              </button>

              {courseSectionForm && (
                <div>
                  {
                    <CourseSectionForm
                      setCourseSectionForm={setCourseSectionForm}
                      courseSectionForm={courseSectionForm}
                      courseID={id}
                      setRefresh={setRefresh}
                      refresh={refresh}
                    />
                  }
                </div>
              )}
            </div>
          </div>
        </div>


        <div className="w-1/2 border rounded-md p-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-600">
              Course Information
            </h1>
            <DeleteCourse courseId={id} />
          </div>
          <div className="w-full m-7">
            <label htmlFor="courseName" className="font-semibold text-sm">
              Course Name:
            </label>
            <br />
            <input
              className="p-3 border-gray-200 text-gray-400 cursor-pointer w-[50%] border rounded-md"
              type="text"
              id="courseName"
              value={CourseDetails?.courseName}
              disabled
            />
            <br />
            <br />
            <label htmlFor="courseName" className="font-semibold text-sm">
              Description:
            </label>
            <br />
            <input
              type="text"
              value={CourseDetails?.description}
              disabled
              className="rounded-md  border-gray-200 cursor-pointer text-gray-400 w-[50%] border p-3"
            />
            <br />
            <br />
            <label htmlFor="courseName" className=" font-semibold text-sm">
              Price:
            </label>
            <br />
            <input
              className="border border-gray-200 text-gray-400 cursor-pointer w-[50%] rounded-md p-3"
              type="text"
              value={CourseDetails?.price}
              disabled
            />{" "}
            <br />
            <button
              onClick={() => setIsEditTrue(!isEditTrue)}
              className="mt-3 cursor-pointer px-5 text-sm font-semibold bg-amber-300 p-2 rounded-xl"
            >
              Edit
            </button>
          </div>
          <EnrolledStudents />
        </div>
      </div>
      {isEditTrue && (
        <EditCourseForm
          setisEditTrue={setIsEditTrue}
          isEditTrueValue={isEditTrue}
          courseId={id}
        />
      )}
    </div>
  );
};
export default CourseEditPage;
