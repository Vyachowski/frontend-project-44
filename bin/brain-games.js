#!/usr/bin/env node
import { getUserName } from '../src/tools.js';

const userName = getUserName();
console.log(`Hello, ${userName}!`);
