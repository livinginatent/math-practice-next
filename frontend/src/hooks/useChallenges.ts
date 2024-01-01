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

  const operands = ["+", "-", "*", "/"];

  const operandPicker = (firstOperand:any) => {
    if (firstOperand === "/") {
      return operands.filter((operand) => operand !== "/")[
        Math.floor(Math.random() * 3)
      ];
    }
    return operands[Math.floor(Math.random() * operands.length)];
  };

  const generateDivisibleNumbers = () => {
    let num, divisor;
    do {
      num = Math.floor(Math.random() * 10) + 1; // ensure non-zero
      divisor = Math.floor(Math.random() * num) + 1; // ensure less than or equal to num
    } while (num % divisor !== 0);
    return [num, divisor];
  };

  const randomOrderOfOperations = () => {
    let firstNum, secondNum, thirdNum;
    let challenge;

    let firstOperand = operands[Math.floor(Math.random() * operands.length)];
    let secondOperand = operandPicker(firstOperand);

    if (firstOperand === "/" || secondOperand === "/") {
      [firstNum, secondNum] = generateDivisibleNumbers();
      thirdNum = Math.floor(Math.random() * 10) + 1; // ensure non-zero
    } else {
      firstNum = Math.floor(Math.random() * 10);
      secondNum = Math.floor(Math.random() * 10);
      thirdNum = Math.floor(Math.random() * 10);
    }

    challenge = `${firstNum}${firstOperand}${secondNum}${secondOperand}${thirdNum}`;
    return challenge;
  };

  return {
    randomAddition,
    randomSubtraction,
    randomMultiplication,
    randomDivision,
    randomOrderOfOperations,
  };
};
