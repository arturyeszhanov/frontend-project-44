import runGame from '../index.js';

const rule = 'What number is missing in the progression?';
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length, hiddenIndex) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, String(correctAnswer)];
};

const generateRound = () => {
  const length = getRandomInt(5, 10);
  const start = getRandomInt(1, 20);
  const step = getRandomInt(2, 10);
  const hiddenIndex = getRandomInt(0, length - 1);

  return generateProgression(start, step, length, hiddenIndex);
};

const runProgressionGame = () => {
  runGame(rule, generateRound);
};

export default runProgressionGame;
