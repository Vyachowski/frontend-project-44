#!/usr/bin/env node
import gameEngine from '../src/game-engine.js';
import brainGcd from '../src/games/braingcd.js';

const question = 'Find the greatest common divisor of given numbers.';
const roundRules = [brainGcd(), brainGcd(), brainGcd()];

gameEngine(question, roundRules);
