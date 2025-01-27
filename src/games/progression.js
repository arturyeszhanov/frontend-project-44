import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'What number is missing in the progression?';

// Функция для генерации прогрессии и скрытого числа
const generateProgression = (progression, hiddenIndex) => {
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..'; // Заменяем скрытый элемент на '..'
  const question = progression.join(' '); // Формируем строку с прогрессией

  return [question, String(correctAnswer)];
};

// Функция для генерации раунда
const generateRound = () => {
  const length = getRandomNumber(5, 10); // Генерация случайной длины прогрессии
  const start = getRandomNumber(1, 20);  // Генерация случайного начального значения
  const step = getRandomNumber(2, 10);   // Генерация случайного шага прогрессии

  // Строим прогрессию
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);  // Строим арифметическую прогрессию
  }

  // Получаем случайный индекс для пропуска числа
  const hiddenIndex = getRandomNumber(0, progression.length - 1);  // Случайный индекс для скрытого числа

  return generateProgression(progression, hiddenIndex);  // Генерация вопроса
};

// Функция для запуска игры
const runProgressionGame = () => {
  runGame(rule, generateRound);  // Запуск игры с правилами и генератором раунда
};

export default runProgressionGame;
