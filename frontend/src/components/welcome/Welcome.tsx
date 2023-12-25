"use client";
import React from "react";
import {
  StyledGeneralInfo,
  StyledMainWrapper,
  StyledWelcomeText,
  StyledWelcomeWrapper,
} from "./styles";
import Logo from "./logo";
import ChallengesGrid from "../challengesGrid/ChallengesGrid";

type Props = {};

const Welcome = (props: Props) => {
  
  return (
    <>
      <StyledMainWrapper>
        <StyledWelcomeWrapper>
          <StyledGeneralInfo>
            <Logo />
            <StyledWelcomeText>{`Take me to the challenges!`}</StyledWelcomeText>
          </StyledGeneralInfo>
        </StyledWelcomeWrapper>
        <ChallengesGrid />
      </StyledMainWrapper>
    </>
  );
};

export default Welcome;
