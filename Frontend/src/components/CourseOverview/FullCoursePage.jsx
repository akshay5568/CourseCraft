import { useParams } from "react-router";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import { FaUsers } from "react-icons/fa";

export const FullCoursePage = () => {
  const { id } = useParams();
  const courses = useSelector((state) => state?.CourseDetails?.allCourses);
  const filterCourses = courses.find((course) => course._id === id);
  console.log(filterCourses);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className=" bg-[linear-gradient(to_bottom,black_0%,black_40%,white_40%,white_100%)] text-white p-3 flex gap-3">
        <div className="w-[60%] h-screen ml-35 mt-10 bg-transparent p-7">
          <div className="w-full">
            <h1 className="w-full text-3xl font-medium">
              {filterCourses?.courseName}
            </h1>
            <h1 className="mt-3 w-full text-xl font-extralight">
              {filterCourses?.description}
            </h1>
            <div className="mt-10">
              <h1 className="font-extralight text-sm">
                Created by : {filterCourses?.createdBy}
              </h1>
              <h1 className="font-extralight text-sm">
                Last updated : {filterCourses?.updatedAt}
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

          <div className="mt-15 text-black">
              <h1 className="text-2xl">Course content</h1>

              <div className="w-full border h-screen mt-3 rounded-md">
                  
              </div>
          </div>
        </div>

        <div className="w-[25%] h-fit shadow-2xl  mt-10 bg-white rounded-md">
          <div>
            <img
              src={filterCourses?.thubmnail}
              className="w-full rounded-md"
              alt="image"
            />
          </div>
          <div className="w-full p-5 text-black">
            <h1 className="text-2xl font-extralight">
              ${filterCourses?.price}
            </h1>
            <div className="w-full m-auto">
              <button className="mt-3 bg-[#6d29d1] w-full hover:bg-purple-500 text-white text-sm cursor-pointer font-semibold rounded-md px-7 py-2">
                Go to cart
              </button>

              <button className="mt-3 bg-white border text-[#6d29d1] hover:bg-purple-200 cursor-pointer border-[#6d29d1] w-full  text-sm font-semibold rounded-md px-7 py-2">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullCoursePage;
