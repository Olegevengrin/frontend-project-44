import readlineSync from 'readline-sync';

function questionName() {
  const userName = readlineSync.question('May I have your name? ');
  return console.log(`Hi ${userName}!`);
}
export default { questionName };
