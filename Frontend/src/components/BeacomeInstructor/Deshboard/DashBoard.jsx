import React from 'react'
import Header from '../../Header/Header';
import BarChartForCourseRevenue from './BarChartForCourseRevenue';
import ChartForStudents from './ChartForStudents';
import { useParams } from 'react-router';
import SellerHeader from '../SellerHeader';

export const DashBoard = () => {
    const {sellerID} = useParams();
  return (
       <div className="min-h-screen bg-[#f7f9fa]">
      <SellerHeader />

      <div
        className="
          w-full

          px-4
          sm:px-6
          md:px-10

          py-6
          md:py-10
        "
      >
        {/* PAGE TITLE */}
        <div className="mb-10">
          <h1
            className="
              text-3xl
              md:text-4xl

              font-bold

              text-[#1c1d1f]
            "
          >
            Instructor Dashboard
          </h1>

          <p
            className="
              mt-2

              text-sm
              md:text-base

              text-[#6a6f73]
            "
          >
            Track your revenue,
            students, and course
            performance.
          </p>
        </div>

        {/* REVENUE CHART */}
        <div
          className="
            bg-white

            border
            border-gray-200

            rounded-3xl

            shadow-sm

            p-4
            sm:p-6
            md:p-8

            w-full

            overflow-x-auto
          "
        >
          <div
            className="
              flex
              items-center
              justify-between

              mb-6
            "
          >
            <div>
              <h2
                className="
                  text-xl
                  md:text-2xl

                  font-semibold

                  text-[#1c1d1f]
                "
              >
                Course Revenue
              </h2>

              <p
                className="
                  mt-1

                  text-sm

                  text-[#6a6f73]
                "
              >
                Revenue generated
                from your courses.
              </p>
            </div>
          </div>

          <div className="w-full min-w-[300px]">
            <BarChartForCourseRevenue
              sellerID={sellerID}
            />
          </div>
        </div>

        {/* STUDENTS SECTION */}
        <div className="mt-10">
          <div
            className="
              bg-white

              border
              border-gray-200

              rounded-3xl

              shadow-sm

              p-4
              sm:p-6
              md:p-8

              overflow-x-auto
            "
          >
            <div className="mb-6">
              <h2
                className="
                  text-xl
                  md:text-2xl

                  font-semibold

                  text-[#1c1d1f]
                "
              >
                Students Analytics
              </h2>

              <p
                className="
                  mt-1

                  text-sm

                  text-[#6a6f73]
                "
              >
                Total students
                enrolled in each
                course.
              </p>
            </div>

            <div
              className="
                w-full

                flex
                justify-center

                min-w-[280px]
              "
            >
              <div
                className="
                  w-full
                  md:w-[70%]
                  lg:w-[50%]
                "
              >
                <ChartForStudents
                  sellerID={sellerID}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DashBoard;