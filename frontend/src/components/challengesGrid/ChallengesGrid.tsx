"use client";
import React from "react";
import { GridContainer, GridItem } from "./styles";
import myImage from "../../../addition-vertical-2x2digit-sums-under-100-a.gif";
type Props = {};

const ChallengesGrid = (props: Props) => {
  return (
    <GridContainer>
      <GridItem>Addition Practice </GridItem>
      <GridItem>Subtraction Practice </GridItem>
      <GridItem>Multiplication Practice </GridItem>
      <GridItem>Division Practice </GridItem>
      <GridItem>PEMDAS Practice </GridItem>
      <GridItem>Tutorials </GridItem>
    </GridContainer>
  );
};

export default ChallengesGrid;
