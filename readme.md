# wait [![Build Status](https://travis-ci.org/akameco/wait.svg?branch=master)](https://travis-ci.org/akameco/wait)

[![Greenkeeper badge](https://badges.greenkeeper.io/akameco/wait.svg)](https://greenkeeper.io/)

## Install

```
$ npm install --save @akameco/wait
```


## Usage

```js
const wait = require('@akameco/wait');

wait(5000).then(() => {
	console.log('hello');
});
```

## API

### wait([ms])

#### input

Type: `number`

## License

MIT © [akameco](http://akameco.github.io)
