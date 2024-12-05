import playGame from '../index.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator));
  return [question, correctAnswer];
};

const playCalcGame = () => playGame(description, generateRound);

export default playCalcGame;
