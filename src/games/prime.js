import playGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const number = Math.floor(Math.random() * 100) + 1; // Случайное число от 1 до 100
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [String(number), correctAnswer];
};

const playPrimeGame = () => playGame(description, generateRound);

export default playPrimeGame;
