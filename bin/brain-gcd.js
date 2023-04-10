#!/usr/bin/env node
import gameEngine from '../src/game-engine.js';
import brainGcd from '../src/games/brainGcd.js';

gameEngine(brainGcd());
