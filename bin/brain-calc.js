#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome from '../src/cli.js';
import gameEngine from '../src/gameengine.js';
import { expressionsWithEquality } from '../src/answers.js';
const answers = expressionsWithEquality();
const gameRule = 'What is the result of the expression?';
gameEngine(gameRule, answers);
