"use client";
import React from "react";
import { StyledMainChallengeWrapper } from "./styles";
import Challenge from "@/components/shared/Challenge/Challenge";
type Props = {};

const ChallengePage = ({ params }: any) => {
  const challengeType = params.challengeType;
  console.log(challengeType);
  return (
    <StyledMainChallengeWrapper>
      <Challenge challengeType={challengeType} />
    </StyledMainChallengeWrapper>
  );
};

export default ChallengePage;
