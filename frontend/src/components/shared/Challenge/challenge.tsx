"use client";
import React, { useEffect, useState } from "react";
import {
  StyledAnswer,
  StyledButton,
  StyledChallenge,
  StyledChallengesWrapper,
  StyledWrongAnswer,
} from "./styles";
import { useChallenges } from "@/hooks/useChallenges";
import { ChallengeComponent } from "@/interfaces";
import { useRouter } from "next/navigation";

const Challenge = ({ challengeType }: ChallengeComponent) => {
  const router = useRouter();
  const { randomAddition, randomSubtraction,randomMultiplication,randomDivision } = useChallenges();
  const [challenge, setChallenge] = useState("");
  const [result, setResult] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isWrong, setIsWrong] = useState(false);
  useEffect(() => {
    generateNewChallenge();
  }, []);
  const generateNewChallenge = () => {
    let newChallenge;
    if (challengeType === "addition") {
      newChallenge = randomAddition();
    } else if (challengeType === "subtraction") {
      newChallenge = randomSubtraction();
    } else if(challengeType==='multiplication'){
        newChallenge = randomMultiplication()
    }else if(challengeType==='division'){
        newChallenge=randomDivision()
    }
     else {
        router.push('/challenges')
    }
    if (newChallenge) {
      setChallenge(newChallenge.challenge);
      setResult(newChallenge.result);
      setUserInput("");
      setIsWrong(false);
    }
  };

  const handleInputChange = (e: any) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    if (parseInt(userInput, 10) === result) {
      generateNewChallenge();
    } else {
      setIsWrong(true);
    }
  };

  return (
    <StyledChallengesWrapper>
      <StyledChallenge>
        {challenge ? challenge : ""}
        <StyledAnswer value={userInput} onChange={handleInputChange} />
        <StyledButton onClick={handleSubmit}>Answer</StyledButton>
        {isWrong ? <StyledWrongAnswer>Try Again</StyledWrongAnswer> : null}
      </StyledChallenge>
    </StyledChallengesWrapper>
  );
};

export default Challenge;
