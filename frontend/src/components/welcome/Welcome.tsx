"use client";
import React from "react";
import Image from "next/image";
import Logo from "./logo";
import ChallengesGrid from "../challengesGrid/ChallengesGrid";

const Welcome = () => {
  return (
    <>
      <main className="flex w-full px-4 justify-center ">
        <section className="flex flex-col w-3/5 mt-[30px] bg-[#fffbf5]">
          <div className="flex flex-col justify-center items-center h-full">
            <button className="bg-transparent border-none text-2xl text-[#3c22dd] cursor-pointer hover:border-b-2 hover:border-[#3c22dd] mt-[-2px]">
              Take me to the challenges!
            </button>
          </div>
        </section>
        <ChallengesGrid />
      </main>
    </>
  );
};

export default Welcome;
