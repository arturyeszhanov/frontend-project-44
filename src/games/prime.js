import runGame from '../index.js';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generatePrimeQuestion = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = number;
  return [question, correctAnswer];
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playPrimeGame = () => {
  runGame(rule, generatePrimeQuestion);
};

export default playPrimeGame;
