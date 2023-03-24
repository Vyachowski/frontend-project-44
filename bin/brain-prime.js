#!/usr/bin/env node
import gameEngine from '../src/game-engine.js';
import { brainPrime } from '../src/game-data.js';

const answers = brainPrime();
const gameRule = '';
gameEngine(gameRule, answers);
