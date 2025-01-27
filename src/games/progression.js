import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'What number is missing in the progression?';

const generateProgression = (start, step, length, hiddenIndex) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer.toString()];
};

const generateRound = () => {
  const length = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(2, 10);
  const hiddenIndex = getRandomNumber(0, 100);

  return generateProgression(start, step, length, hiddenIndex);
};

const runProgressionGame = () => {
  runGame(rule, generateRound);
};

export default runProgressionGame;
