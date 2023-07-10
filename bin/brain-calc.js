#!/usr/bin/env node
import { roundsToWin, gameEngine } from '../src/game-engine.js';
import brainCalc from '../src/games/brainСalc.js';

const question = 'What is the result of the expression?';
const roundRules = Array.from({ length: roundsToWin }, brainCalc);

gameEngine(question, roundRules);
