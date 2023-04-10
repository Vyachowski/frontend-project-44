#!/usr/bin/env node
import gameEngine from '../src/game-engine.js';
import brainPrime from '../src/game-data/brainPrime.js';

gameEngine(brainPrime());
