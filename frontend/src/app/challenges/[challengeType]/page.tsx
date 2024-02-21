"use client";
import React from "react";
import { StyledMainChallengeWrapper } from "./styles";
import Challenge from "@/components/shared/Challenge/Challenge";

const ChallengePage = ({ params }: any) => {
  const challengeType = params.challengeType;
  return (
    <StyledMainChallengeWrapper>
      <Challenge challengeType={challengeType} />
    </StyledMainChallengeWrapper>
  );
};

export default ChallengePage;
