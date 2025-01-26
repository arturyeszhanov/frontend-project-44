import runGame from '../index.js';

const operations = ['+', '-', '*'];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRound = () => {
  const number1 = getRandomInt(1, 20);
  const number2 = getRandomInt(1, 20);
  const operation = operations[getRandomInt(0, operations.length - 1)];

  let question;
  let correctAnswer;

  switch (operation) {
    case '+':
      question = `${number1} + ${number2}`;
      correctAnswer = number1 + number2;
      break;
    case '-':
      question = `${number1} - ${number2}`;
      correctAnswer = number1 - number2;
      break;
    case '*':
      question = `${number1} * ${number2}`;
      correctAnswer = number1 * number2;
      break;
    default:
      throw new Error('Unknown operation: $operation');
  }

  return [question, correctAnswer];
};

const rule = 'What is the result of the expression?';

const runCalcGame = () => {
  runGame(rule, generateRound);
};

export default runCalcGame;
