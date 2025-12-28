import SellerHeader from "./SellerHeader";
import NavBar from "./NavBar";
import { Link } from "react-router";


export const SellerHomePage = () => {

  return (
    <div className="">
      <SellerHeader />
      <div className="flex">
        <NavBar />
        <div className="p-5 mt-7 m-auto w-330">
          <span className="text-3xl font-semibold">Courses</span>
          <br />
          <br />
          <div className="m-auto text-center shadow-xl bg-white h-30 p-10">
            <div className="flex justify-between items-center">
              <span className="font-extralight">Jump into course creation</span>
              <Link
                className="p-2 px-15 rounded-md text-sm bg-purple-600 text-white font-semibold hover:bg-purple-500"
                to={"/"}
              >
                Create Your course
              </Link>
            </div>
          </div>
          <br />
          <br />
          <br />
          <p className="text-center font-extralight">
            Based on your experience, we think these resources will be helpful.
          </p>
          <div className="shadow-xl mt-3">
            <div className="flex items-center justify-around p-5 m-auto">
              <img
                className="w-50"
                src="https://s.udemycdn.com/instructor/dashboard/engaging-course-2x.jpg"
                alt=""
              />
              <div>
                <h3 className="font-light">Create an Engaging Course</h3>
                <h4 className="mt-5 font-extralight">
                  Whether you've been teaching for years or are teaching for the
                  first time, you can <br /> make an engaging course. We've
                  compiled resources and best practices to help you <br />
                  get to the next level, no matter where you're starting.
                </h4>
              </div>
            </div>
          </div>

          <div className="shadow-xl p-3 mt-10">
            <div className="flex justify-around">
              <div className="flex items-center gap-3">
                <img
                  className="w-50"
                  src="https://s.udemycdn.com/instructor/dashboard/video-creation-2x.jpg"
                  alt=""
                />
                <div>
                  <h3 className="font-light">Get Started with Video</h3>
                  <h4 className="font-extralight mt-3">
                    Quality video lectures can set your course apart. <br /> Use
                    our resources to learn the basics.
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img
                  className="w-50"
                  src="https://s.udemycdn.com/instructor/dashboard/build-audience-2x.jpg"
                  alt=""
                />
                <div>
                  <h3 className="font-light">Build Your Audience</h3>
                  <h4 className="font-extralight mt-3">
                    Set your course up for success by building your <br />{" "}
                    audience.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerHomePage;
