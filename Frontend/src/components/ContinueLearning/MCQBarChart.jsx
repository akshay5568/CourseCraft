import React from "react";
import {
  Chart,
  PieController,
  PointElement,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PolarAreaController,
  LineElement,
} from "chart.js";
import { Bar, Doughnut, Line, Pie, PolarArea } from "react-chartjs-2";

Chart.register(
 LineElement,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    PieController,
    BarElement,
    LinearScale,
    PointElement,
    PolarAreaController
);

export const MCQBarChart = ({ data }) => {
  const chartData = {
    labels: ["Right Answers", "Wrong Answers"],
    datasets: [
      {
        label: "Answers",
        data: data,
        backgroundColor: ["rgb(255, 99, 132)", "rgb(75, 192, 192)"],
        fill: false,
        tension: 0.3,
      },
    ],
  };

  return <Pie data={chartData} />;
};
export default MCQBarChart;
