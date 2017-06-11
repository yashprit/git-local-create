'use strict';

var
  exec = require("child_process").exec,
  isGit = require("is-git");

function createGit(path, cb) {
  isGit(path, function(err, exists) {
    if (err) cb(err);
    if (!exists) {
      exec("git init", function(err, status) {
        if (err) cb(err);
        if (status) cb(null, true);
      });
    } else {
      cb("Its a git directory", null)
    }
  });
}

module.exports = function(path, cb) {
  if (typeof path === "function") {
    cb = path;
    path = process.cwd();
  }

  cb = cb || function(err, status) {
    if (err) {
      console.error(err);
      return
    }

    if (status) {
      console.log("Folder created")
    } else {
      console.warn("folder exists")
    }
  }

  createGit(path, cb);
}
