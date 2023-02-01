#!/usr/bin/env node

import welcome from '../src/cli.js';
let name = welcome();
console.log(name);