import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "tailwindcss/tailwind.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ActivityChart = () => {
  const data = {
    labels: [5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27],
    datasets: [
      {
        label: "Activity",
        data: [
          4000, 7000, 5000, 8000, 6000, 9000, 12000, 15000, 10000, 8000, 7000,
        ],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(40, 55, 219, 0.8)",
        borderWidth: 1,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
      },
      x: {
        ticks: {
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-white text-2xl font-semibold">Activity</h1>
        <select
          name="time"
          id="calendar"
          className="bg-gray-600 p-1 rounded-full text-white px-2 font-semibold"
        >
          <option value="weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <div className="w-full h-64 bg-gray-700 rounded-lg">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ActivityChart;
