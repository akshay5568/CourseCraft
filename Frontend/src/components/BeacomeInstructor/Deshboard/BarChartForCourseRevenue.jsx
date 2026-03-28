import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { PolarArea } from "react-chartjs-2";
import { SiCoursera } from "react-icons/si";
import { FaMoneyBill } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";

import {
  Chart as ChartJs,
  LineElement,
  PolarAreaController,
  CategoryScale,
  LinearScale,
  PointElement,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { useSelector } from "react-redux";
import useGetAllSellerCourses from "../../../Hooks/ForSeller/useGetAllSellerCourses";

ChartJs.register(
  LineElement,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  PolarAreaController
);

export const BarChartForCourseRevenue = ({ sellerID }) => {
  useGetAllSellerCourses(sellerID);
  const sellerAllCourse = useSelector((state) => state.SellerAllCourses.course);
  console.log(sellerAllCourse);

  const allCourseNames = sellerAllCourse.map((course) => course?.courseName);
  console.log(allCourseNames);

  const revenue = sellerAllCourse.map(
    (course) => course.price * course.enrolledStudents.length
  );
  let sum = 0;
  for (let i = 0; i < revenue.length; i++) {
    sum += revenue[i];
  }
  console.log(revenue);

  let totalStudents = 0;
  const totalStudentEnrolled = sellerAllCourse.map(
    (students) => students.enrolledStudents.length
  );
  console.log(totalStudentEnrolled);

  for (let i = 0; i < totalStudentEnrolled.length; i++) {
    totalStudents += totalStudentEnrolled[i];
  }

  const chartData = {
    labels: allCourseNames,
    datasets: [
      {
        label: "Total revenue course wise",
        data: revenue,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
        fill: false,
        tension: 0.3,
      },
    ],
  };

  return (
    <div>
      <div className="mt-5 w-full flex p-3 justify-around gap-3 text-sm text-gray-700 font-extralight">
        <div className="bg-[#6ecce1] p-3 rounded-md">
          <SiCoursera className="m-auto" />
          <h1>
            Total Courses :{" "}
            <span className="font-bold">{allCourseNames.length}</span>
          </h1>
        </div>
        <div className="bg-[#6abc6b] p-3 rounded-md">
          <FaMoneyBill className="m-auto" />
          Total revenue genrated : <span className="font-bold">{sum}</span>
        </div>
        <div className="bg-[#e2b164] p-3 rounded-md">
          <PiStudentBold className="m-auto" />
          Total students enrolled :{" "}
          <span className="font-bold">{totalStudents}</span>
        </div>
      </div>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChartForCourseRevenue;
