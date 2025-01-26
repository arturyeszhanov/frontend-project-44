import runGame from '../index.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (number) => {
  if (number <= 1) return false;
  const limit = Math.sqrt(number);
  for (let i = 2; i <= limit; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const generatePrimeQuestion = () => {
  const number = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = number.toString(); // Преобразуем в строку для соответствия ожиданиям
  return [question, correctAnswer];
};

const runPrimeGame = () => {
  runGame(rule, generatePrimeQuestion);
};

export default runPrimeGame;
