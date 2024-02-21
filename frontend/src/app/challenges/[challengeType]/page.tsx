"use client";
import React from "react";
import Challenge from "@/components/shared/Challenge/Challenge";

const ChallengePage = ({ params }: any) => {
  const challengeType = params.challengeType;
  return (
    <main className="flex h-full w-full justify-center items-center">
      <Challenge challengeType={challengeType} />
    </main >
  );
};

export default ChallengePage;
