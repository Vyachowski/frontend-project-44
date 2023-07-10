#!/usr/bin/env node
import gameEngine from '../src/game-engine.js';
import brainPrime from '../src/games/brainPrime.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const roundRules = [brainPrime(), brainPrime(), brainPrime()];

gameEngine(question, roundRules);
