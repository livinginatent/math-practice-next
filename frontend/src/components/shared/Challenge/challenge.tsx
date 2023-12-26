"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  StyledAnswer,
  StyledButton,
  StyledChallenge,
  StyledChallengeWrapper,
  StyledUserGameStats,
  StyledUserLives,
  StyledUserScore,
  StyledUserTime,
  StyledWrongAnswer,
} from "./styles";
import { useChallenges } from "@/hooks/useChallenges";
import { ChallengeComponent } from "@/interfaces";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks/rtkHooks";
import {
  decreaseLives,
  gameOver,
  increaseLives,
  resetGame,
} from "@/app/lib/features/user/userSlice";
import GameOver from "@/components/gameOver/GameOver";
import { ClockIcon, HeartIcon } from "./icons";

const Challenge = ({ challengeType }: ChallengeComponent) => {
  const router = useRouter();
  const {
    randomAddition,
    randomSubtraction,
    randomMultiplication,
    randomDivision,
  } = useChallenges();

  const [challenge, setChallenge] = useState("");
  const [result, setResult] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isWrong, setIsWrong] = useState(false);

  const user = useAppSelector((state) => state.user);
  const isFinished = useAppSelector((state) => state.user.gameOver);
  const time = useRef(user.time);
  const [timeRemaining, setTimeRemaining] = useState(user.time);
  const [isEmpty, setIsEmpty] = useState(false);
  const [streak, setStreak] = useState(0);
  const [lostBy, setLostBy] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    generateNewChallenge();
  }, []);

  useEffect(() => {
    let intervalId: any;
    if (timeRemaining > 0 && user.lives > 0) {
      intervalId = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      dispatch(gameOver());
      setLostBy("time");
    } else if (user.lives === 0) {
      dispatch(gameOver());
      setLostBy("lives");
    }
    return () => clearInterval(intervalId);
  }, [timeRemaining, user.lives]);

  if (streak === 5) {
    dispatch(increaseLives(1));
    setStreak(0);
  }
  const generateNewChallenge = () => {
    let newChallenge;
    if (challengeType === "addition") {
      newChallenge = randomAddition();
    } else if (challengeType === "subtraction") {
      newChallenge = randomSubtraction();
    } else if (challengeType === "multiplication") {
      newChallenge = randomMultiplication();
    } else if (challengeType === "division") {
      newChallenge = randomDivision();
    } else {
      router.push("/challenges");
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
    if (userInput.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false)
      if (parseInt(userInput, 10) === result) {
        setTimeRemaining((prevTime) => (prevTime += 5));
        setStreak((prevStreak) => (prevStreak += 1));
        generateNewChallenge();
      } else {
        setIsWrong(true);
        setStreak(0);
        dispatch(decreaseLives());
      }
    }
  };

  const newGame = () => {
    dispatch(resetGame());
    setTimeRemaining(time.current);
    setStreak(0);
    setIsWrong(false);
    setLostBy("");
    generateNewChallenge();
  };

  return (
    <>
      {isFinished ? (
        <>
          <GameOver newGame={newGame} lostBy={lostBy} />
        </>
      ) : (
        <StyledChallengeWrapper>
          <StyledUserGameStats>
            <StyledUserScore>Score: {user.score} </StyledUserScore>
            <StyledUserTime><ClockIcon/> {timeRemaining} </StyledUserTime>
            <StyledUserLives><HeartIcon/> {user.lives} </StyledUserLives>
          </StyledUserGameStats>
          <StyledChallenge>
            {challenge ? challenge : ""}
            <StyledAnswer value={userInput} onChange={handleInputChange} />
            <StyledButton onClick={handleSubmit}>Answer</StyledButton>
          </StyledChallenge>
          {isWrong ? (
            <StyledWrongAnswer>Try Again</StyledWrongAnswer>
          ) : isEmpty ? (
            <StyledWrongAnswer>Enter a value</StyledWrongAnswer>
          ) : null}
        </StyledChallengeWrapper>
      )}
    </>
  );
};

export default Challenge;
