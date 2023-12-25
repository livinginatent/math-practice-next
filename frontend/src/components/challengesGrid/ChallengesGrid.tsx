"use client";
import React from "react";
import { GridContainer, GridItem } from "./styles";
import { useRouter } from "next/navigation";

type Props = {};

const ChallengesGrid = (props: Props) => {
  const router = useRouter();
  const handleClick = (destination: any) => {
    router.push(destination);
  };
  return (
    <GridContainer>
      <GridItem onClick={()=>handleClick('challenges/addition')} >Addition Practice </GridItem>
      <GridItem onClick={()=>handleClick('challenges/subtraction')}>Subtraction Practice </GridItem>
      <GridItem onClick={()=>handleClick('challenges/multiplication')}>Multiplication Practice </GridItem>
      <GridItem onClick={()=>handleClick('challenges/division')}>Division Practice </GridItem>
      <GridItem onClick={()=>handleClick('challenges/pemdas')}>PEMDAS Practice </GridItem>
      <GridItem onClick={()=>handleClick('/tutorials')}>Tutorials </GridItem>
    </GridContainer>
  );
};

export default ChallengesGrid;
