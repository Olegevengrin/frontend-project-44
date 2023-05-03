import readlineSync from 'readline-sync'

function questionName()
{
var userName = readlineSync.question('May I have your name? ');
return console.log('Hi ' + userName + '!' + ' ');
}
export {questionName}
