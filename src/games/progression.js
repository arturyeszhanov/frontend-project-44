import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'What number is missing in the progression?';

const generateProgression = (progression, hiddenIndex) => {
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, String(correctAnswer)];
};

const generateRound = () => {
  const length = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(2, 10);

  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  const hiddenIndex = getRandomNumber(0, progression.length - 1);

  return generateProgression(progression, hiddenIndex);
};

const runProgressionGame = () => {
  runGame(rule, generateRound);
};

export default runProgressionGame;
