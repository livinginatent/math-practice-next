"use client";
import React, { useEffect, useState } from "react";
import {
  StyledAnswer,
  StyledButton,
  StyledChallenge,
  StyledChallengesWrapper,
} from "./styles";
import { useChallenges } from "@/hooks/useChallenges";

type Props = {};

const Challenge = (props: Props) => {
  const { randomAddition } = useChallenges();
  const [challenge, setChallenge] = useState("");
  const [result, setResult] = useState(0);
  const [userInput, setUserInput] = useState("");
   useEffect(() => {
     generateNewChallenge();
   }, []);
  const generateNewChallenge = () => {
    const newChallenge = randomAddition();
    setChallenge(newChallenge.challenge);
    setResult(newChallenge.result);
    setUserInput(""); 
  };

  const handleInputChange = (e:any) => {
    setUserInput(e.target.value);
  };

   const handleSubmit = () => {
     if (parseInt(userInput, 10) === result) {
       generateNewChallenge();
     } else {
       // Handle incorrect answer (optional)
     }
   };

 

  return (
    <StyledChallengesWrapper>
      <StyledChallenge>
        {challenge ? challenge : ""}
        <StyledAnswer value={userInput} onChange={handleInputChange} />
        <StyledButton onClick={handleSubmit}>Answer</StyledButton>
      </StyledChallenge>
    </StyledChallengesWrapper>
  );
};

export default Challenge;
