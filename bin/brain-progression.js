#!/usr/bin/env node
import gameEngine from '../src/game-engine.js';
import brainProgression from '../src/games/brainprogression.js';

gameEngine(brainProgression());
