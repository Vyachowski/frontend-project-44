# Hexlet JS Project – Brain Games
An educational project on «Hexlet» programming school course «Front-end Developer» to master a basics of Javascript.

___

Обучающий проект на курсе Хекслет по Javascript.

### Hexlet tests and linter status:
[![Actions Status](https://github.com/Vyachowski/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/Vyachowski/frontend-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/e48cef0b51bc1ff7be5c/maintainability)](https://codeclimate.com/github/Vyachowski/frontend-project-44/maintainability)

## Description

Brain Games - collection of simple math games, ran from command line.

## Getting Started

### Dependencies

* Node.js
* NPM Package Manager as a part of Node.js

### Installing

* Clone a GitHub repository via ```git clone https://github.com/Vyachowski/frontend-project-44.git``` or ```git clone git@github.com:Vyachowski/frontend-project-44.git``` for ssh
* Run in a root directory of the project ```make install```
* And than run ```npm link``` to run games easily with short commands
* After winning you can perform ```npm remove -g @hexlet/code``` to uninstall package from the npm global dependencies

### Executing program

You can run one of the five games with short commands (after global installation with ```npm link```) :
* ```brain-calc``` – compute simple math example
* ```brain-even``` – determine if a number is even
* ```brain-gcd``` – find the greatest common divisor
* ```brain-prime``` – determine if a number is simple
* ```brain-progression``` – compute skipped number in an ariphmetic progression

Or add 'make' before the command to run it without global installation (e.g. ```make brain-calc```)
