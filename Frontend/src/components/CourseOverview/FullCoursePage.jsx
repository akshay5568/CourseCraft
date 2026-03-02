import { Link, useParams } from "react-router";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import { FaUsers } from "react-icons/fa";
import CartBtn from "../Cart/CartBtn";
import { payNow } from "../../Constants/Constant.js";
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";
import VideoPlayerPage from "../ContinueLearning/VideoPlayerPage.jsx";
import { FaCalendarAlt } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";

export const FullCoursePage = () => {
  const { id } = useParams();
  const courses = useSelector((state) => state?.CourseDetails?.allCourses);
  const userData = useSelector((state) => state?.User?.data);
  const filterCourses = courses.find((course) => course._id === id);

  const purechasedcourse = filterCourses?.enrolledStudents.filter(
    (course) => course == userData._id
  );

  return (
    <div>
      {purechasedcourse?.length > 0 ? (
        <VideoPlayerPage courseID={filterCourses._id} />
      ) : (
        <>
          <div>
            <Header />
          </div>
          <div className=" bg-[linear-gradient(to_bottom,black_0%,black_40%,white_40%,white_100%)] text-white p-3 h-fit flex gap-3">
            <div className="w-[60%]  h-screen ml-35 mt-10 bg-transparent p-7">
              <div className="w-full">
                <h1 className="w-full text-3xl font-extralight break-all">
                  {filterCourses?.courseName}
                </h1>
                <h1 className="mt-3 w-full font-extralight">
                  {filterCourses?.description}
                </h1>
                <div className="mt-2 text-xs flex items-center gap-2">
                  <PiStudentBold className="text-sm" />
                  <h1>{filterCourses?.enrolledStudents?.length} students</h1>
                </div>
                <div className="mt-5">
                  <h1 className="font-extralight text-sm">
                    Created by{" "}
                    <span className="text-[#bea0ff] underline">
                      {filterCourses?.createdBy?.name}
                    </span>
                  </h1>
                  <h1 className="font-extralight mt-2 flex items-center gap-2 text-sm text-[#e8e9f3]">
                    <span>
                      <FaCalendarAlt />
                    </span>
                    Last updated {filterCourses?.updatedAt}
                  </h1>
                </div>

                <div className="bg-white w-30 p-2 mt-7 rounded-md text-center">
                  <FaUsers className="text-black text-2xl m-auto" />
                  <h5 className="text-black text-sm">
                    {filterCourses?.enrolledStudents?.length}{" "}
                    <span className="text-sm font-extralight">learners</span>
                  </h5>
                </div>
              </div>

              <div className="mt-70 text-black">
                <h1 className="text-2xl">Course content</h1>
                <br />
                <span className="mt-3 text-gray-500 font-extralight text-sm">
                  {filterCourses?.sectionIds?.length} sections
                </span>
                <div className="w-full  border border-gray-300 h-screen mt-3 ">
                  {filterCourses?.sectionIds.map((section) => (
                    <div className="w-full bg-[#e7eaee]  p-3 border-b border-t border-gray-300  flex items-center justify-between">
                      <h1 className="font-extralight text-sm">
                        {section.sectionName}
                      </h1>
                      {purechasedcourse.length > 0 ? (
                        <h1 className="font-semibold text-xs">
                          <FaLockOpen />
                        </h1>
                      ) : (
                        <h1 className="font-semibold text-xs">
                          <FaLock />
                        </h1>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-[25%] h-fit shadow-2xl  mt-10 bg-white rounded-md">
              <div>
                <img
                  src={
                    filterCourses?.thubmnail
                      ? filterCourses?.thubmnail
                      : filterCourses?.thubmnailUrl
                  }
                  className="w-full rounded-md"
                  alt="image"
                />
              </div>
              <div className="w-full p-5 text-black">
                <h1 className="text-2xl font-extralight">
                  ₹{filterCourses?.price}
                </h1>
                <div className="w-full m-auto">
                  <CartBtn
                    courseId={filterCourses?._id}
                    userId={userData?._id}
                  />

                  <button
                    onClick={() =>
                      payNow(filterCourses?.price, id, userData?._id)
                    }
                    className="mt-3 bg-white border text-[#6d29d1] hover:bg-purple-200 cursor-pointer border-[#6d29d1] w-full  text-sm font-semibold rounded-md px-7 py-2"
                  >
                    Buy now ₹{filterCourses?.price}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FullCoursePage;
