#!/usr/bin/env node
import gameEngine from '../src/game-engine.js';
import brainEven from '../src/games/brainEvenly.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';
const roundRules = [brainEven(), brainEven(), brainEven()];

gameEngine(question, roundRules);
