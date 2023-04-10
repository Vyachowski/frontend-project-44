#!/usr/bin/env node
import gameEngine from '../src/game-engine.js';
import brainEven from '../src/games/brainEven.js';

gameEngine(brainEven());
