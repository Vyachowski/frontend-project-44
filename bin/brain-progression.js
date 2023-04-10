#!/usr/bin/env node
import gameEngine from '../src/game-engine.js';
import brainProgression from '../src/game-data/brainProgression.js';

gameEngine(brainProgression());
