#!/usr/bin/env node
import gameEngine from '../src/game-engine.js';
import brainProgression from '../src/games/brainProgression111.js';

const question = 'What number is missing in the progression?';
const roundRules = [brainProgression(), brainProgression(), brainProgression()];

gameEngine(question, roundRules);
