#!/usr/bin/env node
import { getRandomNumber, getRandomIndex } from '../util.js';
import start from '../index.js';

const operationSymbols = ['+', '-', '*'];
const task = 'What is the result of the expression?';
const minRange = 0;
const maxRange = 100;

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      return null;
  }
};

const startRound = () => {
  const num1 = getRandomNumber(minRange, maxRange);
  const num2 = getRandomNumber(minRange, maxRange);
  const operator = operationSymbols[getRandomIndex(operationSymbols)];
  const whichResult = `${num1} ${operator} ${num2}`;
  const isAnswer = calculate(num1, num2, operator).toString();
  return [whichResult, isAnswer];
};

export default () => {
  start(task, startRound);
};
