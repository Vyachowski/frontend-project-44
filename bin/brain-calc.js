#!/usr/bin/env node
import gameEngine from '../src/game-engine.js';
import { brainCalc } from '../src/answers.js';

const answers = brainCalc();
const gameRule = 'What is the result of the expression?';
gameEngine(gameRule, answers);
