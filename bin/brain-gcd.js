#!/usr/bin/env node
import gameEngine from '../src/game-engine/game-engine.js';
import brainGcd from '../src/game-data/braingcd.js';

gameEngine(brainGcd());
