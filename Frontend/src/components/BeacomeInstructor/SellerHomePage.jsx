import SellerHeader from "./SellerHeader";
import NavBar from "./NavBar";
import { Link } from "react-router";


export const SellerHomePage = () => {

  return (
    <div className="min-h-screen bg-[#f7f9fa]">
      <SellerHeader />

      <div className="flex">
        <NavBar />

        <div
          className="
            w-full

            p-4
            md:p-8

            md:ml-18

            pb-28
            md:pb-10
          "
        >
          {/* HEADER */}
          <div>
            <h1
              className="
                text-3xl
                md:text-4xl
                font-bold
                text-[#1c1d1f]
              "
            >
              Courses
            </h1>

            <p
              className="
                mt-2
                text-sm
                md:text-base
                text-[#6a6f73]
              "
            >
              Manage and grow your
              teaching business.
            </p>
          </div>

          {/* CREATE COURSE CARD */}
          <div
            className="
              mt-8

              bg-white
              border
              border-gray-200
              rounded-2xl

              p-6

              shadow-sm
            "
          >
            <div
              className="
                flex
                flex-col
                md:flex-row

                md:items-center
                justify-between

                gap-5
              "
            >
              <div>
                <h2
                  className="
                    text-xl
                    font-semibold
                    text-[#1c1d1f]
                  "
                >
                  Jump into course
                  creation
                </h2>

                <p
                  className="
                    mt-2
                    text-sm
                    text-[#6a6f73]
                  "
                >
                  Create engaging
                  courses and start
                  teaching students.
                </p>
              </div>

              <Link
                className="
                  bg-purple-600
                  hover:bg-purple-700

                  transition

                  text-white
                  font-medium

                  px-6
                  py-3

                  rounded-xl

                  text-center
                  whitespace-nowrap
                "
                to={"/create-course"}
              >
                Create Your Course
              </Link>
            </div>
          </div>

          {/* INFO TEXT */}
          <div className="mt-12">
            <p
              className="
                text-center
                text-[#6a6f73]
                text-sm
                md:text-base
              "
            >
              Based on your
              experience, we think
              these resources will
              help you create better
              courses.
            </p>
          </div>

          {/* RESOURCE CARD 1 */}
          <div
            className="
              mt-8

              bg-white
              border
              border-gray-200

              rounded-2xl

              shadow-sm

              overflow-hidden
            "
          >
            <div
              className="
                flex
                flex-col
                lg:flex-row

                items-center

                gap-6

                p-6
              "
            >
              <img
                className="
                  w-full
                  lg:w-72

                  rounded-2xl
                  object-cover
                "
                src="https://s.udemycdn.com/instructor/dashboard/engaging-course-2x.jpg"
                alt=""
              />

              <div>
                <h3
                  className="
                    text-2xl
                    font-semibold
                    text-[#1c1d1f]
                  "
                >
                  Create an Engaging
                  Course
                </h3>

                <p
                  className="
                    mt-4
                    text-[#6a6f73]
                    leading-7
                    text-sm
                    md:text-base
                  "
                >
                  Whether you've been
                  teaching for years
                  or are teaching for
                  the first time, you
                  can create engaging
                  courses. We've
                  compiled resources
                  and best practices
                  to help you improve
                  your teaching
                  journey.
                </p>
              </div>
            </div>
          </div>

          {/* RESOURCE GRID */}
          <div
            className="
              grid
              grid-cols-1
              xl:grid-cols-2

              gap-6

              mt-8
            "
          >
            {/* VIDEO CARD */}
            <div
              className="
                bg-white
                border
                border-gray-200

                rounded-2xl

                shadow-sm

                p-6
              "
            >
              <div
                className="
                  flex
                  flex-col
                  sm:flex-row

                  items-center

                  gap-5
                "
              >
                <img
                  className="
                    w-full
                    sm:w-48

                    rounded-2xl
                  "
                  src="https://s.udemycdn.com/instructor/dashboard/video-creation-2x.jpg"
                  alt=""
                />

                <div>
                  <h3
                    className="
                      text-xl
                      font-semibold
                      text-[#1c1d1f]
                    "
                  >
                    Get Started with
                    Video
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      md:text-base
                      text-[#6a6f73]
                      leading-7
                    "
                  >
                    Quality video
                    lectures can make
                    your course stand
                    out. Learn the
                    basics of video
                    production.
                  </p>
                </div>
              </div>
            </div>

            {/* AUDIENCE CARD */}
            <div
              className="
                bg-white
                border
                border-gray-200

                rounded-2xl

                shadow-sm

                p-6
              "
            >
              <div
                className="
                  flex
                  flex-col
                  sm:flex-row

                  items-center

                  gap-5
                "
              >
                <img
                  className="
                    w-full
                    sm:w-48

                    rounded-2xl
                  "
                  src="https://s.udemycdn.com/instructor/dashboard/build-audience-2x.jpg"
                  alt=""
                />

                <div>
                  <h3
                    className="
                      text-xl
                      font-semibold
                      text-[#1c1d1f]
                    "
                  >
                    Build Your
                    Audience
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      md:text-base
                      text-[#6a6f73]
                      leading-7
                    "
                  >
                    Grow your student
                    community and set
                    your course up for
                    long-term success.
                  </p>
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
