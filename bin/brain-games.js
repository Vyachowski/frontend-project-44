#!/usr/bin/env node
import { welcome, getName, showName } from '../src/cli.js';

welcome();
showName(getName());
