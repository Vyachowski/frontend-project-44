# Проект по Javascript – Brain Games

Проект в рамках обучения на курсе «фронтэнд-разработчик» школы «Хекслет». На примере проекта изучается основы JavaScript программирования. 

For **Readme in English** please follow [this link](https://github.com/Vyachowski/frontend-project-44/blob/main/README.md)

### Результаты проверки тестом Хекслета и линтера:
[![Actions Status](https://github.com/Vyachowski/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/Vyachowski/frontend-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/e48cef0b51bc1ff7be5c/maintainability)](https://codeclimate.com/github/Vyachowski/frontend-project-44/maintainability)

## Описание

Brain Games - коллекция простых математических игр, запускается из командной строки.

## Getting Started

### Зависимости

* Node.js
* NPM – менеджер пакетов для Node.js

### Установка

* Клонируйте репозиторий гитхаб командой 
* 
```sh
git clone https://github.com/Vyachowski/frontend-project-44.git
```

или 

```sh 
git clone git@github.com:Vyachowski/frontend-project-44.git
```
* В корневой директории репозитория выполните 
  ```sh
  make install
  ```
* Выполните 
  ```sh
  npm link
  ```
  чтобы запускать игры укороченными командами
* После победы выполните 
  ```sh
  npm remove -g @hexlet/code
  ```
  чтобы удалить пакет из глобальных зависимостей

### Выполнение

Все игры могут запускаться короткими командами (после глобальной установки пакета с помощью ```npm link```):
```sh
brain-calc
```
Решите простую математическую задачку
```sh
brain-even
```
Определите четное ли число
```sh
brain-gcd
```
Найдите наибольший общий делитель
```sh
brain-prime
```
Определите [простое ли число](https://ru.wikipedia.org/wiki/Простое_число)
```sh
brain-progression
```
Вычислите пропущенное число в арифметической прогрессии

Если вы не устанавливали пакет глобально, то перед каждой командой добавляйте 'make' (например ```make brain-calc```)

___

___

### Демонстрация установки и игрового процесса

#### Установка

[![asciicast](https://asciinema.org/a/DNX1sRhJFOkFixH5TRhWASezd.svg)](https://asciinema.org/a/DNX1sRhJFOkFixH5TRhWASezd)

#### Удаление

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