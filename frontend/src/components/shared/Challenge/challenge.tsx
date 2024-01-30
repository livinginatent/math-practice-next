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
import { ChallengeComponent, UpdateData } from "@/interfaces";
import { useAppDispatch, useAppSelector } from "@/hooks/rtkHooks";
import {
  decreaseLives,
  gameOver,
  increaseLives,
  resetGame,
} from "@/app/lib/features/user/userSlice";
import GameOver from "@/components/gameOver/GameOver";
import { ClockIcon, HeartIcon } from "./icons";
import updateStats from "@/app/lib/updateStats";

const Challenge = ({ challengeType }: ChallengeComponent) => {
  const {
    randomAddition,
    randomSubtraction,
    randomMultiplication,
    randomDivision,
    randomOrderOfOperations,
  } = useChallenges();

  const [challenge, setChallenge] = useState("");
  const [result, setResult] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isWrong, setIsWrong] = useState(false);

  const player = useAppSelector((state) => state.user);
  const isFinished = useAppSelector((state) => state.user.gameOver);
  const time = useRef(player.time);
  const [timeRemaining, setTimeRemaining] = useState(player.time);
  const [isEmpty, setIsEmpty] = useState(false);
  const [streak, setStreak] = useState(0);
  const [lostBy, setLostBy] = useState("");
  const [score, setScore] = useState(0);

  const finalScore = Number(score);
  const operation = useRef(challengeType);
  const dispatch = useAppDispatch();
  useEffect(() => {
    generateNewChallenge();
  }, []);

  useEffect(() => {
    let intervalId: any;
    if (timeRemaining > 0 && player.lives > 0) {
      intervalId = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      updateStats(operation.current, finalScore);
      dispatch(gameOver());
      setLostBy("time");
    } else if (player.lives === 0) {
      updateStats(operation.current, finalScore);
      dispatch(gameOver());
      setLostBy("lives");
    }
    return () => clearInterval(intervalId);
  }, [timeRemaining, player.lives, dispatch]);

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
    } else if (challengeType === "order-of-operations") {
      newChallenge = randomOrderOfOperations();
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
      setIsEmpty(false);
      if (parseInt(userInput, 10) === result) {
        setScore((prev) => prev + 10);
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
    setScore(0);
  };

  return (
    <>
      {isFinished ? (
        <>
          <GameOver finalScore={score} newGame={newGame} lostBy={lostBy} />
        </>
      ) : (
        <StyledChallengeWrapper>
          <StyledUserGameStats>
            <StyledUserScore>Score: {score} </StyledUserScore>
            <StyledUserTime>
              <ClockIcon /> {timeRemaining}{" "}
            </StyledUserTime>
            <StyledUserLives>
              <HeartIcon /> {player.lives}{" "}
            </StyledUserLives>
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
