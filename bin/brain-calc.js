#!/usr/bin/env node
import gameEngine from '../src/game-engine.js';
import brainCalc from '../src/games/braincalc.js';

const question = 'What is the result of the expression?';
const roundRules = [brainCalc(), brainCalc(), brainCalc()];

gameEngine(question, roundRules);
