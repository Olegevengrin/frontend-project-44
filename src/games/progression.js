#!/usr/bin/env node
import { getRandomNumber, getRandomIndex } from '../util.js';
import start from '../index.js';

const task = 'What number is missing in the progression?';
const minLength = 5;
const maxLength = 10;
const minStep = 1;
const maxStep = 10;
const minRange = 1;
const maxRange = 100;

const generateProgression = (length, firstNumber, step) => {
  const progression = [];
  for (let i = firstNumber; progression.length < length; i += step) {
    progression.push(i);
  }
  return progression;
};

const startRound = () => {
  const length = getRandomNumber(minLength, maxLength);
  const firstNumber = getRandomNumber(minRange, maxRange);
  const step = getRandomNumber(minStep, maxStep);
  const getProgression = generateProgression(length, firstNumber, step);
  const hiddenNumber = getRandomIndex(getProgression);
  const isAnswer = getProgression[hiddenNumber].toString();
  getProgression[hiddenNumber] = '..';
  const whichResult = getProgression.join(' ');
  return [whichResult, isAnswer];
};

export default () => {
  start(task, startRound);
};
