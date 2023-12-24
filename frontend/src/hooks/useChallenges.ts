"use client";

export const useChallenges = () => {
  const randomAddition = () => {
    const firstNum = Math.floor(Math.random() * 10);
    const secondNum = Math.floor(Math.random() * 10);
    const challenge = `${firstNum} + ${secondNum} =`
    const result = firstNum + secondNum
    return {firstNum,secondNum,challenge,result}

  };
  return {randomAddition}
};
