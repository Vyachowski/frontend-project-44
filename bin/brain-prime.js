#!/usr/bin/env node
import gameEngine from '../src/game-engine.js';
import { brainPrime } from '../src/answers.js';

const answers = brainPrime();
const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
gameEngine(gameRule, answers);
