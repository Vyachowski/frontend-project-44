#!/usr/bin/env node
import gameEngine from '../src/game-engine.js';
import brainPrime from '../src/games/brainprime.js';

gameEngine(brainPrime());
