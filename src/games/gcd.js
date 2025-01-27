import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';

const findGcd = (number1, number2) => {
  let a = number1;
  let b = number2;
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  const question = `${number1} ${number2}`;
  const correctAnswer = String(findGcd(number1, number2));

  return [question, correctAnswer];
};

const runGcdGame = () => {
  runGame(rule, generateRound);
};

export default runGcdGame;
