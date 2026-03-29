import React from "react";
import { Bar, Doughnut, Line, Pie, PolarArea } from "react-chartjs-2";
import {
  Chart,
  BarElement,
  LineElement,
  PolarAreaController,
  CategoryScale,
  LinearScale,
  PointElement,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { useSelector } from "react-redux";
import useGetAllSellerCourses from "../../../Hooks/ForSeller/useGetAllSellerCourses";
import { Link } from "react-router";

Chart.register(
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

export const ChartForStudents = ({ sellerID }) => {
  useGetAllSellerCourses(sellerID);
  const sellerAllCourse = useSelector((state) => state.SellerAllCourses.course);
  const allCourseNames = sellerAllCourse.map((course) => course?.courseName);
  console.log(allCourseNames);
  const students = sellerAllCourse.map(
    (course) => course.enrolledStudents.length
  );
  console.log(students);

  const chartData = {
    labels: allCourseNames,
    datasets: [
      {
        label: "Students",
        data: students,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
        ],
        fill: false,
        tension: 0.3,
      },
    ],
  };

  return <Doughnut data={chartData} />;
};

export default ChartForStudents;
