"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ChallengesGrid from "../ChallengesGrid/ChallengesGrid";

const Welcome = () => {
  const router = useRouter()

  return (
    <>
      <main className="flex w-full justify-center mb-6 px-4 h-screen ">
        <section className="flex flex-col w-3/5 mt-[30px] bg-[#fffbf5]">
          <div className="flex flex-col justify-center items-center h-full">
            <button onClick={()=>router.push('/challenges')} className="bg-transparent border-none mb-4 text-4xl text-[#3c22dd] cursor-pointer hover:border-b-2 hover:border-[#3c22dd] mt-[-2px]">
              Take me to the challenges!
            </button>
            <p className="">OR</p>
            <p className="text-2xl mt-4">Pick a quick challenge!</p>
          </div>
        </section>
        <ChallengesGrid />
      </main>
    </>
  );
};

export default Welcome;
