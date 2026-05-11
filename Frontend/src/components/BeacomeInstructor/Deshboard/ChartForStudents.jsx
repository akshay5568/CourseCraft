import React from "react";
import { Doughnut } from "react-chartjs-2";

import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { useSelector } from "react-redux";

import useGetAllSellerCourses from "../../../Hooks/ForSeller/useGetAllSellerCourses";

Chart.register(
  ArcElement,
  Tooltip,
  Legend
);

export const ChartForStudents = ({
  sellerID,
}) => {
  useGetAllSellerCourses(
    sellerID
  );

  const sellerAllCourse =
    useSelector(
      (state) =>
        state.SellerAllCourses
          .course
    );

  const allCourseNames =
    sellerAllCourse.map(
      (course) =>
        course?.courseName
    );

  const students =
    sellerAllCourse.map(
      (course) =>
        course
          .enrolledStudents
          .length
    );

  const chartData = {
    labels: allCourseNames,

    datasets: [
      {
        label: "Students",

        data: students,

        backgroundColor: [
          "#8b5cf6",
          "#06b6d4",
          "#f59e0b",
          "#10b981",
          "#ef4444",
          "#3b82f6",
          "#ec4899",
        ],

        borderWidth: 2,

        borderColor:
          "#ffffff",

        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom",

        labels: {
          padding: 20,

          usePointStyle: true,

          font: {
            size: 12,
          },

          color: "#374151",
        },
      },

      tooltip: {
        backgroundColor:
          "#111827",

        padding: 12,

        cornerRadius: 12,

        titleFont: {
          size: 14,
        },

        bodyFont: {
          size: 13,
        },
      },
    },
  };

  return (
    <div
      className="
        w-full

        bg-white

        rounded-3xl

        p-4
        sm:p-6

        shadow-sm

        border
        border-gray-200
      "
    >
      {/* HEADER */}
      <div className="mb-6">
        <h1
          className="
            text-xl
            md:text-2xl

            font-bold

            text-[#1c1d1f]
          "
        >
          Students Overview
        </h1>

        <p
          className="
            mt-2

            text-sm

            text-[#6b7280]
          "
        >
          Total students enrolled
          in each course.
        </p>
      </div>

      {/* CHART */}
      <div
        className="
          w-full

          h-[300px]
          sm:h-[400px]
          md:h-[450px]

          flex
          items-center
          justify-center
        "
      >
        <Doughnut
          data={chartData}
          options={options}
        />
      </div>
    </div>
  );
};

export default ChartForStudents;