import { Link, redirect, useNavigate, useParams } from "react-router";
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
import SignIn from "../SignIn/SignIn.jsx";

export const FullCoursePage = () => {
  const { id } = useParams();
  const redirect = useNavigate();
  const courses = useSelector((state) => state?.CourseDetails?.allCourses);
  const userData = useSelector((state) => state?.User?.data);
  const filterCourses = courses.find((course) => course._id === id);

  const payRazorpay = (filterCourses, id, userData) => {
    if(userData == undefined) return redirect('/signin')
    payNow(filterCourses,id,userData);
  };

  const purechasedcourse = filterCourses?.enrolledStudents.filter(
    (course) => course == userData._id
  );

  return (
    <div>
      {purechasedcourse?.length > 0 ? (
        <VideoPlayerPage courseID={filterCourses._id} />
      ) : (
        <>
          <Header />

          {/* HERO SECTION */}
          <div className="bg-[#1c1d1f] text-white">
            <div
              className="
                max-w-[1400px]
                mx-auto
                px-4
                md:px-8
                py-10
              "
            >
              <div
                className="
                  flex
                  flex-col
                  lg:flex-row
                  gap-10
                "
              >
                {/* LEFT SIDE */}
                <div className="flex-1">
                  {/* TITLE */}
                  <h1
                    className="
                      text-3xl
                      md:text-4xl
                      font-bold
                      leading-tight
                      break-words
                    "
                  >
                    {filterCourses?.courseName}
                  </h1>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-5
                      text-[#d1d7dc]
                      text-base
                      md:text-lg
                      leading-7
                    "
                  >
                    {filterCourses?.description}
                  </p>

                  {/* STUDENTS */}
                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      gap-2
                      text-sm
                    "
                  >
                    <PiStudentBold className="text-lg" />

                    <span>
                      {filterCourses?.enrolledStudents?.length} students
                    </span>
                  </div>

                  {/* CREATOR */}
                  <div className="mt-5">
                    <h1
                      className="
                        text-sm
                        text-[#d1d7dc]
                      "
                    >
                      Created by{" "}
                      <span
                        className="
                          text-[#c0c4fc]
                          underline
                        "
                      >
                        {filterCourses?.createdBy?.name}
                      </span>
                    </h1>

                    <h1
                      className="
                        mt-3
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-[#d1d7dc]
                      "
                    >
                      <FaCalendarAlt />
                      Last updated {filterCourses?.updatedAt}
                    </h1>
                  </div>

                  {/* LEARNERS */}
                  <div
                    className="
                      mt-8
                      inline-flex
                      items-center
                      gap-3
                      bg-white
                      text-black
                      px-5
                      py-3
                      rounded-lg
                    "
                  >
                    <FaUsers className="text-xl" />

                    <div>
                      <h5 className="font-bold">
                        {filterCourses?.enrolledStudents?.length}
                      </h5>

                      <p
                        className="
                          text-sm
                          text-gray-500
                        "
                      >
                        learners
                      </p>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE CARD */}
                <div
                  className="
                    w-full
                    lg:w-[380px]
                  "
                >
                  <div
                    className="
                      bg-white
                      rounded-xl
                      overflow-hidden
                      shadow-xl
                      text-black
                      lg:sticky
                      lg:top-24
                    "
                  >
                    {/* IMAGE */}
                    <img
                      src={
                        filterCourses?.thubmnail
                          ? filterCourses?.thubmnail
                          : filterCourses?.thubmnailUrl
                      }
                      className="
                        w-full
                        h-[220px]
                        object-cover
                      "
                      alt="course image"
                    />

                    {/* CONTENT */}
                    <div className="p-6">
                      {/* PRICE */}
                      <h1
                        className="
                          text-4xl
                          font-bold
                          text-[#1c1d1f]
                        "
                      >
                        ₹{filterCourses?.price}
                      </h1>

                      {/* BUTTONS */}
                      <div className="mt-6">
                        <CartBtn
                          courseId={filterCourses?._id}
                          userId={userData?._id}
                        />

                        <button
                          onClick={() =>
                            payRazorpay(
                              filterCourses?.price,
                              id,
                              userData?._id,
                            )
                          }
                          className="
                            mt-4
                            w-full
                            bg-[#a435f0]
                            hover:bg-[#8710d8]
                            transition
                            text-white
                            py-4
                            rounded-lg
                            font-bold
                            cursor-pointer
                          "
                        >
                          Buy now ₹{filterCourses?.price}
                        </button>
                      </div>

                      {/* GUARANTEE */}
                      <p
                        className="
                          mt-5
                          text-center
                          text-sm
                          text-gray-500
                        "
                      >
                        30-Day Money-Back Guarantee
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COURSE CONTENT */}
          <div
            className="
              max-w-[1400px]
              mx-auto
              px-4
              md:px-8
              py-10
            "
          >
            <div className="max-w-[850px]">
              {/* TITLE */}
              <div>
                <h1
                  className="
                    text-3xl
                    font-bold
                    text-[#1c1d1f]
                  "
                >
                  Course content
                </h1>

                <p
                  className="
                    mt-2
                    text-sm
                    text-[#6a6f73]
                  "
                >
                  {filterCourses?.sectionIds?.length} sections
                </p>
              </div>

              {/* SECTION LIST */}
              <div
                className="
                  mt-6
                  border
                  border-gray-200
                  rounded-xl
                  overflow-hidden
                "
              >
                {filterCourses?.sectionIds.map((section, index) => (
                  <div
                    key={index}
                    className="
                        flex
                        items-center
                        justify-between
                        px-5
                        py-4
                        border-b
                        border-gray-200
                        bg-[#f7f9fa]
                        hover:bg-gray-100
                        transition
                      "
                  >
                    {/* SECTION NAME */}
                    <h1
                      className="
                          text-sm
                          md:text-base
                          font-medium
                          text-[#1c1d1f]
                        "
                    >
                      {section.sectionName}
                    </h1>

                    {/* LOCK */}
                    <div className="text-sm">
                      {purechasedcourse?.length > 0 ? (
                        <FaLockOpen />
                      ) : (
                        <FaLock />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FullCoursePage;
