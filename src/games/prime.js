import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) return false;
  const limit = Math.sqrt(number);
  for (let i = 2; i <= limit; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const generatePrimeQuestion = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = number.toString();
  return [question, correctAnswer];
};

const runPrimeGame = () => {
  runGame(rule, generatePrimeQuestion);
};

export default runPrimeGame;
