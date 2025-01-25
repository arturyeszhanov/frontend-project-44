import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEvenGame = () => {
  runGame(rule, generateRound);
};

export default runEvenGame;
