import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const operations = ['+', '-', '*'];
const rule = 'What is the result of the expression?';

const calculateExpression = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 20);
  const number2 = getRandomNumber(1, 20);
  const operation = operations[getRandomNumber(0, operations.length - 1)];

  const question = `${number1} ${operation} ${number2}`;
  const correctAnswer = calculateExpression(number1, number2, operation);

  return [question, correctAnswer.toString];
};

const runCalcGame = () => {
  runGame(rule, generateRound);
};

export default runCalcGame;
