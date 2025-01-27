import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'What number is missing in the progression?';

const buildProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const length = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(2, 10);

  const progression = buildProgression(start, step, length);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

const runProgressionGame = () => {
  runGame(rule, generateRound);
};

export default runProgressionGame;
