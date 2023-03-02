#!/usr/bin/env node
import gameEngine from '../src/gameengine.js';
import threeNumbersWithEveness from '../src/answers.js';

const answers = threeNumbersWithEveness();
const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
gameEngine(gameRule, answers);
