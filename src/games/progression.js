import runGame from '../index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = () => {
  const length = getRandomInt(5, 10); // Длина прогрессии (не менее 5 чисел)
  const start = getRandomInt(1, 20); // Начальное число прогрессии
  const step = getRandomInt(2, 10); // Шаг прогрессии
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  const hiddenIndex = getRandomInt(0, length - 1); // Индекс, в котором будет спрятано число
  const correctAnswer = progression[hiddenIndex];

  progression[hiddenIndex] = '..'; // Заменяем одно из чисел на '..'

  const question = progression.join(' ');

  return [question, correctAnswer];
};

const rule = 'What number is missing in the progression?';

const playProgressionGame = () => {
  runGame(rule, generateProgression);
};

export default playProgressionGame;
