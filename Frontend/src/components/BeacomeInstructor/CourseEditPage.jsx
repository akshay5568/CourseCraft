import SellerHeader from "./SellerHeader";
import axios from "axios";
import { mainURL } from "../../Constants/Constant";
import { Link, useParams } from "react-router";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCourseDetails } from "../../Slice/CourseDetailsReducer";
import { addCourseVideos } from "../../Slice/CourseVideoSlice";
import EnrolledStudents from "./EnrolledStudents";
import EditCourseForm from "./EditCourseForm";

export const CourseEditPage = () => {
  const CourseDetails = useSelector((state) => state.CourseDetails.details);
  const CourseVideos = useSelector((state) => state.CourseVideo.videos);
  const id = useParams();
  const dispatch = useDispatch();

 const [isEditTrue,setIsEditTrue] = useState(false);

  const getCourseData = async () => {
    const token = localStorage.getItem("jwtToken");
    try {
      const res = await axios.post(`${mainURL}/course-full-page`, id, {
        headers: {
          Authorization: `Brearer ${token}`,
        },
      });
      dispatch(addCourseDetails(res.data?.courseDetails));
      dispatch(addCourseVideos(res.data?.videoCourseDetails));
    } catch (e) {
      console.log("Error", e);
    }
  };

  useEffect(() => {
    getCourseData();
  }, []);

  return (
    <div>
      <SellerHeader />
      <div className="h-screen w-full p-3 gap-3 flex">
        <div className="w-1/2 border rounded-md p-3">
          <h1 className="text-gray-600 text-xl font-bold">Videos</h1>
          {CourseVideos?.length > 0 ? (
            ""
          ) : (
            <div className="mt-5">
              <h1 className="text-sm m-3 font-semibold">
                No one video uploaded yet. Start uploading videos click here...
              </h1>
              <Link
                className="bg-amber-300 p-2 m-3 rounded-xl text-sm font-semibold"   
                to={`/upload-course-videos/${id?.id}`}
              >
                Upload videos
              </Link>
            </div>
          )}
        </div>
        <div className="w-1/2 border rounded-md p-3">
          <h1 className="text-xl font-bold text-gray-600">
            Course Information
          </h1>
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
      {isEditTrue && <EditCourseForm setisEditTrue={setIsEditTrue} isEditTrueValue={isEditTrue}/>}

    </div>

  );
};
export default CourseEditPage;
