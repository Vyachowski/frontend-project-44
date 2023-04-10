#!/usr/bin/env node
import gameEngine from '../src/game-engine/game-engine.js';
import brainEven from '../src/game-data/braineven.js';

gameEngine(brainEven());
