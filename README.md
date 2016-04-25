# koa2-async-demo

A simple demo app in node.js using koa2(async,await), mongoose.

## Requirements

* Node (version>=5.6.0)
* MongoDB (needed to store data)

## Setup

### 1. Clone the repo
```
$ git clone https://github.com/chenchunyong/koa2-async-demo.git
$ cd koa2-async-demo
```
### 2. Install dependencies
```
$ npm install
```
### 3.  Make sure MongoDB is running

```
$ lsof -iTCP:27017 -sTCP:LISTEN
```
### 4.  Start  server
```
$ npm start
```
if any files change,use `nodemon` to automatically restart your node application.

## Eslint

```
$ npm run lint
```

## Test

```
$ npm test
```
## Pre-commit

It will ensure that your `npm run lint ` passes before you can commit your changes

