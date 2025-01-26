import runGame from '../index.js';

const operations = ['+', '-', '*'];
const rule = 'What is the result of the expression?';
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const calculateExpression = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Unknown operation: $operation');
  }
};

const generateRound = () => {
  const number1 = getRandomInt(1, 20);
  const number2 = getRandomInt(1, 20);
  const operation = operations[getRandomInt(0, operations.length - 1)];

  const question = `${number1} ${operation} ${number2}`;
  const correctAnswer = calculateExpression(number1, number2, operation);

  return [question, String(correctAnswer)];
};

const runCalcGame = () => {
  runGame(rule, generateRound);
};

export default runCalcGame;
