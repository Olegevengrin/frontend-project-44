const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

export { getRandomNumber, getRandomIndex };
