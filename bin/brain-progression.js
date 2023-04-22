#!/usr/bin/env node
import gameEngine from '../src/game-engine.js';
import brainProgression from '../src/game-data/brainprogression.js';

gameEngine(brainProgression());
