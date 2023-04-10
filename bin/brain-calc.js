#!/usr/bin/env node
import gameEngine from '../src/game-engine.js';
import brainCalc from '../src/games/brainCalc.js';

gameEngine(brainCalc());
