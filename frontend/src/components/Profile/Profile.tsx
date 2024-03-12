"use client";
import React from "react";

import UserInfo from "./UserInfo/UserInfo";
import UserProgress from "./UserProgress/UserProgress";
import UserCard from "./UserCard/UserCard";
import UserAchievements from "./UserAchievements/UserAchievements";
type Props = {};

const Profile = (props: Props) => {
  
  return (
    <main className="bg-[#eeeeee] h-screen ">
      <section className="flex flex-col ml-8 gap-4 ">
        <div className="flex">
          <UserCard />
          <UserInfo />
        </div>

        <div className="flex">
          <UserAchievements />
          <UserProgress />
        </div>
      </section>
    </main>
  );
};

export default Profile;
