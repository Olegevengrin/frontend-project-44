#!/usr/bin/env node
import { getRandomNumber } from '../util.js';
import start from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRange = 0;
const maxRange = 1000;

const isEven = (number) => (number % 2 === 0);

const startRound = () => {
  const numberToDetermine = getRandomNumber(minRange, maxRange);
  const isAnswer = isEven(numberToDetermine) ? 'yes' : 'no';

  return [numberToDetermine, isAnswer];
};

export default () => {
  start(task, startRound);
};
