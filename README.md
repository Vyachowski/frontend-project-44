# Hexlet JS Project – Brain Games

This is an educational project on the "Front-end Developer" course at Hexlet programming school, designed to teach the basics of Javascript.

Чтобы читать **Readme на русском**  перейдите по [этой ссылке](https://github.com/Vyachowski/frontend-project-44/blob/main/README_ru.md)

### Hexlet tests and linter status:
[![Actions Status](https://github.com/Vyachowski/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/Vyachowski/frontend-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/e48cef0b51bc1ff7be5c/maintainability)](https://codeclimate.com/github/Vyachowski/frontend-project-44/maintainability)

## Description

Brain Games is a collection of simple math games that can be run from the command line.

## Getting Started

### Dependencies

* Node.js
* NPM Package Manager as a part of Node.js

### Installing

* Clone a GitHub repository via  

```sh
git clone https://github.com/Vyachowski/frontend-project-44.git
```

or 

```sh 
git clone git@github.com:Vyachowski/frontend-project-44.git
```
for ssh
* Run in a root directory of the project 
```sh 
npm ci
```
* And than execute 
```sh 
npm link
```
to run games easily with short commands
* After winning you can perform 
```sh
npm remove -g @hexlet/code
```
to uninstall package from the npm global dependencies

### Executing program

You can run one of the five games using short commands (after global installation with ```npm link```) :
```sh
make brain-calc
```
Compute simple math example
```sh
make brain-even
```
Determine if a number is even
```sh 
make brain-gcd
```
Find the greatest common divisor
```sh 
make brain-prime
```
Determine if a [number is prime](https://en.wikipedia.org/wiki/prime_number)
```sh 
make brain-progression
```
Compute skipped number in an ariphmetic progression

To run a command with a global installation, you can omit the 'make' before the command. For example, if you have a program called 'brain-calc' installed globally, you can simply type 'brain-calc' to execute it.

___

___

### Game demo

#### Installation

[![asciicast](https://asciinema.org/a/DNX1sRhJFOkFixH5TRhWASezd.svg)](https://asciinema.org/a/DNX1sRhJFOkFixH5TRhWASezd)

#### Deinstallation

[![asciicast](https://asciinema.org/a/570133.svg)](https://asciinema.org/a/570133)

#### Brain-calc

[![asciicast](https://asciinema.org/a/570068.svg)](https://asciinema.org/a/570068)

#### Brain-even

[![asciicast](https://asciinema.org/a/570072.svg)](https://asciinema.org/a/570072)

#### Brain-gcd

[![asciicast](https://asciinema.org/a/570073.svg)](https://asciinema.org/a/570073)

#### Brain-prime

[![asciicast](https://asciinema.org/a/570128.svg)](https://asciinema.org/a/570128)

#### Brain-progression

[![asciicast](https://asciinema.org/a/570129.svg)](https://asciinema.org/a/570129)
