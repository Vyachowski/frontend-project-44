#!/usr/bin/env node
import gameEngine from '../src/game-engine/game-engine.js';
import brainPrime from '../src/game-data/brainprime.js';

gameEngine(brainPrime());
