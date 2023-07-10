#!/usr/bin/env node
import gameEngine from '../src/game-engine.js';
import brainEven from '../src/games/brainEven.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';
const roundRules = Array.from({ length: 3 }, brainEven);

gameEngine(question, roundRules);
