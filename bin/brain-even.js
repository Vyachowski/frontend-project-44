#!/usr/bin/env node
import gameEngine from '../src/game-engine.js';
import { brainEven } from '../src/game-data.js';

gameEngine(brainEven());
