import { getUserStats } from "@/app/lib/me/me";
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
type Props = {};

const StatsChart = (props: Props) => {
  const [userStats, setUserStats] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const stats = await getUserStats();
      if (stats && stats.userStats) {
        setUserStats(stats.userStats); // Now directly setting userStats
      } else {
        console.error("Failed to load user stats");
      }
    };
    fetchData();
  }, []);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Math",
      },
    },
  };

  const totalGamesPlayed = userStats ? userStats.totalGamesPlayed : 0;
  const totalAdditionPlayed = userStats ? userStats.totalAdditionPlayed : 0;
  const totalSubtractionPlayed = userStats
    ? userStats.totalSubtractionPlayed
    : 0;
  const totalMultiplicationPlayed = userStats
    ? userStats.totalMultiplicationPlayed
    : 0;
  const totalDivisionPlayed = userStats ? userStats.totalDivisionPlayed : 0;
  const totalOrderedPlayed = userStats ? userStats.totalOrderedPlayed : 0;
  const labels = [
    "Total Games Played",
    "Total Addition Played",
    "Total Subtraction Played",
    "Total Multiplication Played",
    "Total Division Played",
    "Total Ordered Played",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Total Games Played",
        // Make sure the data array contains values in the same order as the labels
        data: [
          totalGamesPlayed,
          totalAdditionPlayed,
          totalSubtractionPlayed,
          totalMultiplicationPlayed,
          totalDivisionPlayed,
          totalOrderedPlayed,
        ], // Corrected to match labels
        backgroundColor: [
          "rgba(99, 107, 255, 0.5)",
          "rgba(53, 162, 235, 0.5)",
          "rgba(235, 53, 174, 0.314)",
          "rgba(164, 32, 76, 0.5)",
          "rgba(7, 144, 142, 0.5)",
          "rgba(208, 104, 25, 0.5)",
        ],
      },
    ],
  };
  return (
    <section className="bg-[#d5d8df] pb-[3.25rem] flex items-center justify-center ">
      <Bar options={options} data={data} />
    </section>
  );
};

export default StatsChart;
