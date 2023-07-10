#!/usr/bin/env node
import gameEngine from '../src/game-engine.js';
import brainCalc from '../src/games/brainСalc.js';

const question = 'What is the result of the expression?';
const roundRules = Array.from({ length: 3 }, brainCalc);

gameEngine(question, roundRules);
