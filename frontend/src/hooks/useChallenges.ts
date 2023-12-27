"use client";

export const useChallenges = () => {
  const randomAddition = () => {
    const firstNum = Math.floor(Math.random() * 10);
    const secondNum = Math.floor(Math.random() * 10);
    const challenge = `${firstNum} + ${secondNum} =`;
    const result = firstNum + secondNum;
    return { challenge, result };
  };

  const randomSubtraction = () => {
    const firstNum = Math.floor(Math.random() * 10);
    const secondNum = Math.floor(Math.random() * 10);
    const challenge = `${firstNum} - ${secondNum} =`;
    const result = firstNum - secondNum;
    return { challenge, result };
  };
  const randomMultiplication = () => {
    const firstNum = Math.floor(Math.random() * 10);
    const secondNum = Math.floor(Math.random() * 10);
    const challenge = `${firstNum} * ${secondNum} =`;
    const result = firstNum * secondNum;
    return { challenge, result };
  };
  const randomDivision = () => {
    let firstNum;
    let divisors = [];

    while (divisors.length === 0) {
      firstNum = Math.floor(Math.random() * 100);
      divisors = [];
      for (let i = 2; i < firstNum; i++) {
        if (firstNum % i === 0) {
          divisors.push(i);
        }
      }
    }

    const secondNum = divisors[Math.floor(Math.random() * divisors.length)];
    const challenge = `${firstNum} / ${secondNum} =`;
    const result = firstNum / secondNum;

    return { challenge, result };
  };


const operations = ['+', '-', '*', '/'];



  return {
    randomAddition,
    randomSubtraction,
    randomMultiplication,
    randomDivision,
    
  };
};
