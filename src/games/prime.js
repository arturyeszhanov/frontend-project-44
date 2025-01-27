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

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runPrimeGame = () => {
  runGame(rule, generateRound);
};

export default runPrimeGame;
