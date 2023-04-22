#!/usr/bin/env node
import gameEngine from '../src/game-engine.js';
import brainCalc from '../src/games/braincalc.js';

gameEngine(brainCalc());
