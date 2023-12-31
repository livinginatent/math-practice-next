"use client";
import React from "react";
import { GridContainer, GridItem } from "./styles";
import { useRouter } from "next/navigation";

type Props = {};

const ChallengesGrid = (props: Props) => {
  const router = useRouter();
  const URL = "challenges/";
  const items = [
    "addition",
    "subtraction",
    "multiplication",
    "division",
    "modulus",
  ];
  const handleClick = (destination: any) => {
    router.push(destination);
  };
  return (
    <GridContainer>
      {items.map((item) => {
        return (
          <GridItem key={item} onClick={() => handleClick(`${URL}${item}`)}>
            {item.charAt(0).toLocaleUpperCase() + item.slice(1)}
          </GridItem>
        );
      })}
      <GridItem onClick={() => handleClick(`${URL}order-of-operations`)}>Order Of Operations</GridItem>
    </GridContainer>
  );
};

export default ChallengesGrid;
