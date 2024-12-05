import playGame from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const start = Math.floor(Math.random() * 10) + 1; // Начальное число прогрессии
  const step = Math.floor(Math.random() * 5) + 1; // Шаг прогрессии
  const length = Math.floor(Math.random() * 6) + 5; // Длина прогрессии (5-10)
  const progression = generateProgression(start, step, length);

  const hiddenIndex = Math.floor(Math.random() * progression.length); // Случайная позиция
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  return [question, correctAnswer];
};

const playProgressionGame = () => playGame(description, generateRound);

export default playProgressionGame;
