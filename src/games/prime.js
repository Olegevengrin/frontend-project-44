#!/usr/bin/env node
import { getRandomNumber } from '../util.js';
import start from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minRange = 2;
const maxRange = 101;

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const startRound = () => {
  const numberToDetermine = getRandomNumber(minRange, maxRange);
  const isAnswer = isPrime(numberToDetermine) ? 'yes' : 'no';

  return [numberToDetermine, isAnswer];
};

export default () => {
  start(task, startRound);
};
