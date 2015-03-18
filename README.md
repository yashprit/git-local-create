#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> perform git init, stupid by useful


## Install

```sh
$ npm install --save git-local-create
```
## Example

### JavaScript

```js
var git-local-create = require('git-local-create');

gitLocalCreate(function(err, data){
  console.log(data) //=> true
});
```

### Command Line reference

```sh
$ npm install --global git-local-create
$ git-local-create
```

## Methods

```js
var gitLocalCreate = require('git-local-create');

gitLocalCreate(function(err, data){
  console.log(data) //=> true
});
```

### gitLocalCreate([path], cb)

Check if current folder is git folder or not


## Run Test
```sh
npm test
```

## Contribute or Report Issue
For bugs and feature requests, [please create an issue][issue-url].


## License

MIT © [Yashprit](yashprit.github.io)


[issue-url]: https://github.com/yashprit/git-local-create/issues
[npm-url]: https://npmjs.org/package/git-local-create
[npm-image]: https://badge.fury.io/js/git-local-create.svg
[travis-url]: https://travis-ci.org/yashprit/git-local-create
[travis-image]: https://travis-ci.org/yashprit/git-local-create.svg?branch=master
[daviddm-url]: https://david-dm.org/yashprit/git-local-create.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/yashprit/git-local-create
