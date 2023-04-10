#!/usr/bin/env node
import gameEngine from '../src/game-engine/game-engine.js';
import brainCalc from '../src/game-data/braincalc.js';

gameEngine(brainCalc());
