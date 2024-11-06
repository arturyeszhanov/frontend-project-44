#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { welcomeUser, playGame } from '../src/cli.js';

// Функция, которая генерирует случайное число
const getRandomNumber = () => Math.floor(Math.random() * 100);

// Функция для игры
const brainEvenGame = () => {
  const userName = welcomeUser();
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  console.log(rules);
  
  let correctAnswersCount = 0;
  
  while (correctAnswersCount < 3) {
    const question = getRandomNumber();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    correctAnswersCount += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};

brainEvenGame();

