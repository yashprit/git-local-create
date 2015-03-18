#!/usr/bin/env node

'use strict';
var
  args = require('minimist')(process.argv.slice(2)),
  gitLocalCreate = require('./');

gitLocalCreate(function(err, data) {
  if (err) {
    console.error(err);
    return
  }

  if (data) {
    console.log(data)
  }

});
