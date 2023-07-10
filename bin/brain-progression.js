#!/usr/bin/env node
import { roundsToWin, gameEngine } from '../src/game-engine.js';
import brainProgression from '../src/games/brainProgression.js';

const question = 'What number is missing in the progression?';
const roundRules = Array.from({ length: roundsToWin }, brainProgression);

gameEngine(question, roundRules);
