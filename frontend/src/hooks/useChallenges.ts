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

  const findDivisors = (number: number) => {
    return Array.from({ length: number }, (_, i) => i + 1).filter(
      (x) => number % x === 0
    );
  };

  const generateDivisibleNumbers = () => {
    let num, divisor;
    do {
      num = Math.floor(Math.random() * 50) + 1; // ensure non-zero
      divisor = Math.floor(Math.random() * num) + 1; // ensure less than or equal to num
    } while (num % divisor !== 0);
    return [num, divisor];
  };

  const randomOrderOfOperations = () => {
    let firstNum: number;
    let secondNum: number;
    let thirdNum: number;
    let firstOp: string;
    let secondOp: string;
    let divisors: number[];
    let challenge: string;
    let result: number;
    const operands = ["+", "-", "*", "/"];

    const useBrackets = Math.random() > 0.5;

    if (useBrackets) {
      const leftBracket = Math.random() > 0.5;
      if (leftBracket) {
        firstOp = operands[Math.floor(Math.random() * operands.length)];
        secondOp = operands[Math.floor(Math.random() * operands.length)];
        if (firstOp === "/" && secondOp === "/") {
          const nonDivisionOperands = operands.filter((op) => op !== "/");
          secondOp =
            nonDivisionOperands[
              Math.floor(Math.random() * nonDivisionOperands.length)
            ];
        }
        
        if (firstOp === "*" && secondOp === "/") {
          firstNum = Math.floor(Math.random() * 15 + 1);
          secondNum = Math.floor(Math.random() * 15 + 1);
          divisors = findDivisors(firstNum * secondNum);
       
          thirdNum = divisors[Math.floor(Math.random() * divisors.length)];
          challenge = `(${firstNum}${firstOp}${secondNum})${secondOp}${thirdNum}`;
          result = eval(challenge);
          return { challenge, result };
        } else if (firstOp === "+" && secondOp === "/") {
          firstNum = Math.floor(Math.random() * 10 + 1);
          secondNum = Math.floor(Math.random() * 10 + 1);
          divisors = findDivisors(firstNum + secondNum);
          thirdNum = divisors[Math.floor(Math.random() * divisors.length)];
          challenge = `(${firstNum}${firstOp}${secondNum})${secondOp}${thirdNum}`;
          result = eval(challenge);
          return { challenge, result };
        } else if (firstOp === "-" && secondOp === "/") {
          secondNum = Math.floor(Math.random() * 15 + 1);
          firstNum = Math.floor(Math.random() * 15 + 1) + secondNum;
          divisors = findDivisors(firstNum - secondNum);
          thirdNum = divisors[Math.floor(Math.random() * divisors.length)];
          challenge = `(${firstNum}${firstOp}${secondNum})${secondOp}${thirdNum}`;
          result = eval(challenge);
          return { challenge, result };
        } else if (firstOp === "/") {
          [firstNum, secondNum] = generateDivisibleNumbers();
          thirdNum = Math.floor(Math.random() * 10 + 1);
          challenge = `(${firstNum}${firstOp}${secondNum})${secondOp}${thirdNum}`;
          result = eval(challenge);
          return { challenge, result };
        } else {
          firstNum = Math.floor(Math.random() * 10 + 1);
          secondNum = Math.floor(Math.random() * 10 + 1);
          thirdNum = Math.floor(Math.random() * 10 + 1);
          challenge = `(${firstNum}${firstOp}${secondNum})${secondOp}${thirdNum}`;
          result = eval(challenge);
          return { challenge, result };
        }
      }
    } else {
      firstOp = operands[Math.floor(Math.random() * operands.length)];
      secondOp = operands[Math.floor(Math.random() * operands.length)];

      if (firstOp === "/") {
        const nonDivisionOperands = operands.filter((op) => op !== "/");
        secondOp =
          nonDivisionOperands[
            Math.floor(Math.random() * nonDivisionOperands.length)
          ];
        [firstNum, secondNum] = generateDivisibleNumbers();
        thirdNum = Math.floor(Math.random() * 20) + 1;
        challenge = `${firstNum}${firstOp}${secondNum}${secondOp}${thirdNum}`;
        result = eval(challenge);
      } else if (firstOp === "+" && secondOp === "/") {
        firstNum = Math.floor(Math.random() * 50) + 1;
        [secondNum, thirdNum] = generateDivisibleNumbers();
        challenge = `${firstNum}${firstOp}${secondNum}${secondOp}${thirdNum}`;
        result = eval(challenge);
      } else if (firstOp === "-" && secondOp === "/") {
        firstNum = Math.floor(Math.random() * 50) + 1;
        [secondNum, thirdNum] = generateDivisibleNumbers();
        challenge = `${firstNum}${firstOp}${secondNum}${secondOp}${thirdNum}`;
        result = eval(challenge);
      } else if (firstOp === "*" && secondOp === "/") {
        firstNum = Math.floor(Math.random() * 15) + 1;
        secondNum = Math.floor(Math.random() * 10) + 1;
        const product = firstNum * secondNum;
        divisors = findDivisors(product);
        thirdNum = divisors[Math.floor(Math.random() * divisors.length)];
        challenge = `${firstNum}${firstOp}${secondNum}${secondOp}${thirdNum}`;
        result = eval(challenge);
      } else {
        firstNum = Math.floor(Math.random() * 15) + 1;
        secondNum = Math.floor(Math.random() * 15) + 1;
        thirdNum = Math.floor(Math.random() * 15) + 1;
        challenge = `${firstNum}${firstOp}${secondNum}${secondOp}${thirdNum}`;
        result = eval(challenge);
      }
      return { challenge, result };
    }
  };

  return {
    randomAddition,
    randomSubtraction,
    randomMultiplication,
    randomDivision,
    randomOrderOfOperations,
  };
};
