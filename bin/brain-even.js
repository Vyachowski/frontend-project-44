#!/usr/bin/env node
import gameEngine from '../src/game-engine.js';
import { brainEven } from '../src/answers.js';

const answers = brainEven();
const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
gameEngine(gameRule, answers);
