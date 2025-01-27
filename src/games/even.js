import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEvenGame = () => {
  runGame(rule, generateRound);
};

export default runEvenGame;
