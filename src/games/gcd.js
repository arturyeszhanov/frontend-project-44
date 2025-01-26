import runGame from '../index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

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
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);

  const question = `${number1} ${number2}`;
  const correctAnswer = findGcd(number1, number2);

  return [question, correctAnswer];
};

const rule = 'Find the greatest common divisor of given numbers.';

const runGcdGame = () => {
  runGame(rule, generateRound);
};

export default runGcdGame;
