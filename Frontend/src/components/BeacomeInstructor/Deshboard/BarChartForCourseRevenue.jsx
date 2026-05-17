import React from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { SiCoursera } from "react-icons/si";
import { FaMoneyBill } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";

import { useSelector } from "react-redux";

import useGetAllSellerCourses from "../../../Hooks/ForSeller/useGetAllSellerCourses";
import Loading from "../../ShimmerUI/Loading";

ChartJs.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const BarChartForCourseRevenue = ({ sellerID }) => {
  useGetAllSellerCourses(sellerID);
  
  const sellerAllCourse = useSelector((state) => state.SellerAllCourses);
  if(sellerAllCourse.loading) return <Loading/> 
  
  const allCourseNames = sellerAllCourse?.course.map((course) => course?.courseName);

  const revenue = sellerAllCourse?.course.map(
    (course) => course.price * course.enrolledStudents.length
  );

  let sum = 0;

  for (let i = 0; i < revenue.length; i++) {
    sum += revenue[i];
  }

  let totalStudents = 0;

  const totalStudentEnrolled = sellerAllCourse?.course.map(
    (students) => students.enrolledStudents.length
  );

  for (let i = 0; i < totalStudentEnrolled.length; i++) {
    totalStudents += totalStudentEnrolled[i];
  }

  const chartData = {
    labels: allCourseNames,

    datasets: [
      {
        label: "Course Revenue",

        data: revenue,

        backgroundColor: [
          "#8b5cf6",
          "#06b6d4",
          "#f59e0b",
          "#10b981",
          "#ef4444",
          "#3b82f6",
          "#ec4899",
        ],

        borderRadius: 8,

        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        backgroundColor: "#111827",

        padding: 12,

        cornerRadius: 12,
      },
    },

    scales: {
      x: {
        ticks: {
          color: "#4b5563",

          font: {
            size: 11,
          },
        },

        grid: {
          display: false,
        },
      },

      y: {
        ticks: {
          color: "#4b5563",
        },

        grid: {
          color: "rgba(0,0,0,0.05)",
        },
      },
    },
  };

  return (
    <div className="w-full">
      {/* TOP STATS */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3

          gap-4

          mb-8
        "
      >
        {/* TOTAL COURSES */}
        <div
          className="
            bg-linear-to-r
            from-cyan-400
            to-cyan-500

            text-white

            rounded-3xl

            p-5

            shadow-md
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <div>
              <p className="text-sm opacity-90">Total Courses</p>

              <h1
                className="
                  text-3xl
                  font-bold
                  mt-2
                "
              >
                {allCourseNames.length}
              </h1>
            </div>

            <div
              className="
                bg-white/20

                p-3

                rounded-2xl
              "
            >
              <SiCoursera className="text-2xl" />
            </div>
          </div>
        </div>

        {/* TOTAL REVENUE */}
        <div
          className="
            bg-linear-to-r
            from-emerald-400
            to-emerald-500

            text-white

            rounded-3xl

            p-5

            shadow-md
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <div>
              <p className="text-sm opacity-90">Total Revenue</p>

              <h1
                className="
                  text-3xl
                  font-bold
                  mt-2
                "
              >
                ₹{sum}
              </h1>
            </div>

            <div
              className="
                bg-white/20

                p-3

                rounded-2xl
              "
            >
              <FaMoneyBill className="text-2xl" />
            </div>
          </div>
        </div>

        {/* TOTAL STUDENTS */}
        <div
          className="
            bg-linear-to-r
            from-orange-400
            to-orange-500

            text-white

            rounded-3xl

            p-5

            shadow-md
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <div>
              <p className="text-sm opacity-90">Total Students</p>

              <h1
                className="
                  text-3xl
                  font-bold
                  mt-2
                "
              >
                {totalStudents}
              </h1>
            </div>

            <div
              className="
                bg-white/20

                p-3

                rounded-2xl
              "
            >
              <PiStudentBold className="text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* CHART CARD */}
      <div
        className="
          bg-white

          rounded-3xl

          border
          border-gray-200

          shadow-sm

          p-4
          sm:p-6
        "
      >
        <div className="mb-6">
          <h1
            className="
              text-xl
              md:text-2xl

              font-bold

              text-[#1c1d1f]
            "
          >
            Revenue Analytics
          </h1>

          <p
            className="
              mt-2

              text-sm

              text-[#6b7280]
            "
          >
            Revenue generated by each course.
          </p>
        </div>

        <div
          className="
            w-full

            h-80
            sm:h-[400px]
            md:h-[500px]
          "
        >
          <Bar data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default BarChartForCourseRevenue;
