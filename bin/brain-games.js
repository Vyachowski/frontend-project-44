#!/usr/bin/env node
import { welcome, getName, displayName } from '../src/cli.js';

welcome();
displayName(getName());
