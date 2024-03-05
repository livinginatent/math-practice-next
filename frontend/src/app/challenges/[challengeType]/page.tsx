"use client";
import Challenge from "@/components/shared/Challenge/challenge";
import React from "react";

const ChallengePage = ({ params }: any) => {
  const challengeType = params.challengeType;
  return (
    <main className="flex h-screen w-full justify-center items-center">
      <Challenge challengeType={challengeType} />
    </main >
  );
};

export default ChallengePage;
