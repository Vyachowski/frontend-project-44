#!/usr/bin/env node
import gameEngine from '../src/game-engine.js';
import { brainGcd } from '../src/answers.js';

const answers = brainGcd();
const gameRule = 'Find the greatest common divisor of given numbers.';
gameEngine(gameRule, answers);
