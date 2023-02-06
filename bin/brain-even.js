#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome from '../src/cli.js';
import gameEngine from '../src/gameengine.js';
import threeNumbersWithEveness from '../src/answers.js';
const answers = threeNumbersWithEveness();
const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
gameEngine(gameRule, answers);
