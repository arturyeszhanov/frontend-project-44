import runGame from '../index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const findGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = findGcd(num1, num2);

  return [question, correctAnswer];
};

const rule = 'Find the greatest common divisor of given numbers.';

const runGcdGame = () => {
  runGame(rule, generateRound);
};

export default runGcdGame;
