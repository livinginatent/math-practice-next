import React from "react";
import { StyledGameModeWrapper, StyledImage, StyledModeTitle, StyledWrapper } from "./styles";
import myImage from '../../../addition-vertical-2x2digit-sums-under-100-a.gif'

type Props = {};

const GameModes = (props: Props) => {
  return (
    <StyledWrapper>
      <StyledGameModeWrapper>
        <StyledModeTitle>
          <StyledImage
            alt="Your Image"
            width={350}
            height={450}
            src={myImage}
          ></StyledImage>
        </StyledModeTitle>
      </StyledGameModeWrapper>
    </StyledWrapper>
  );
};

export default GameModes;
