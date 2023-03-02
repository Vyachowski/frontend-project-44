#!/usr/bin/env node
import welcome from '../src/cli.js';

const name = welcome();
console.log(name);
