"use client";
import React, { useEffect, useState } from "react";
import SideBar from "../../components/Sidebar/Sidebar";
import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import { useAppSelector } from "@/hooks/rtkHooks";
import { useSession } from "next-auth/react";
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

const MyProfile = () => {
  const expanded = useAppSelector((state) => state.sidebar.isExpanded);
  const [userStats, setUserStats] = useState(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      setUserStats(session?.user?.userStats);
    }
  }, [session, status]);

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
        label: "User Stats",
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
    <div className="flex flex-row w-full">
      <SideBar />
      {/* Apply the dynamic Tailwind class to adjust based on the sidebar state */}
      <div className={`flex-1 transition-all duration-300`}>
        <ProfileHeader isExpanded={expanded} />
        <section className="bg-white flex items-center justify-center ">
          <Bar options={options} data={data} />
        </section>
      </div>
    </div>
  );
};

export default MyProfile;
