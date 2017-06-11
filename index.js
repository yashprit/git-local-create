'use strict';

var
  var exec = require("shelljs").exec,
  isGit = require("is-git");

function createGit(path, cb) {
  isGit(path, function(err, exists) {
    if (err) cb(err);
    if (!exists) {
      const { stdout, stderr, code } = exec("git init", { silent: true });
      const output = stdout.replace("\n", "");
      if(stderr) {
        cb(err);
      } else {
        cb(null, true);
      }
    } else {
      cb(null, false);
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
      console.warn("Folder exists")
    }
  }

  createGit(path, cb);
}
