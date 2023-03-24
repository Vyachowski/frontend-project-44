#!/usr/bin/env node
import gameEngine from '../src/game-engine.js';
import { brainCalc } from '../src/game-data.js';

gameEngine(brainCalc());
