#!/usr/bin/env node
import gameEngine from '../src/game-engine.js';
import { brainProgression } from '../src/answers.js';

const answers = brainProgression();
const gameRule = 'What number is missing in the progression?';
gameEngine(gameRule, answers);
