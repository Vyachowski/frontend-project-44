#!/usr/bin/env node
import gameEngine from '../src/game-engine.js';
import brainGcd from '../src/games/braingcd.js';

gameEngine(brainGcd());
