"use client";
import React, { ReactComponentElement, useState } from "react";
import SideBar from "../../components/Sidebar/Sidebar";
import ProfileHeader from "@/components/shared/ProfileHeader/ProfileHeader";
import StatsChart from "@/components/StatsChart/StatsChart";
import Profile from "@/components/Profile/Profile";

const MyProfile = () => {
  const [isActive, setIsActive] = useState("");

  return (
    <div className="flex flex-row">
      <SideBar onSelect={(component: any) => setIsActive(component)} />
      <div className={`flex-1 transition-all duration-300`}>
        <ProfileHeader path="" />
        {isActive === "dashboard" && <StatsChart />}
        {isActive === "profile" && <Profile/>}
      </div>
    </div>
  );
};

export default MyProfile;
