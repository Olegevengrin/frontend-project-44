import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  return console.log(`Hi ${userName}!`);
};
