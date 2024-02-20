"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  StyledAnswer,
  StyledButton,
  StyledChallenge,
 
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
import { Button } from "@rewind-ui/core";

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
        <main className="bg-[#fff6f6] rounded text-4xl text-center items-center flex flex-col absolute top-50 left-50 w-2/4 h-2/4">
          <section className="flex h-auto justify-around items-center w-full">
            <p className="flex flex-row">
              Score: {score} <ClockIcon /> {timeRemaining}{" "}
            </p>

            <p className="flex flex-row">
              <HeartIcon /> {player.lives}
            </p>
          </section>
          <div className="flex justify-center align-center h-2/5 mt-[3rem]" >
            {challenge ? challenge : ""}
            <input
              className="rounded border-solid border border-[#b6bbc4] w-[15%] h-[30%] text-xl ml-2"
              value={userInput}
              onChange={handleInputChange}
            />
            <Button
              className="w-[15%] h-[30%] ml-2 "
              onClick={handleSubmit}
            >
              Answer
            </Button>
          </div>
          {isWrong ? (
            <StyledWrongAnswer>Try Again</StyledWrongAnswer>
          ) : isEmpty ? (
            <StyledWrongAnswer>Enter a value</StyledWrongAnswer>
          ) : null}
        </main>
      )}
    </>
  );
};

export default Challenge;
