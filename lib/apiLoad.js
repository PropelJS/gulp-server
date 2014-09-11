'use strict';

var exec = require('child_process').exec;
var path = require('path');

var gulp = null;
var config = null;

/**
 * Sets up the API Load Testing Task
 *
 * @param {Object} gulpRef The gulp instance to attach the task to
 * @param {Object} conf The configuration object
 */
function apiLoadSetup(gulpRef, conf) {
  gulp = gulpRef;
  config = conf;

  gulp.task('load', 'Runs the API Load Tests', [], apiLoadTask);
}

/**
 * Runs the API Load Testing Task
 *
 * @param {Function} done The callback function
 */
function apiLoadTask(done) {
  var mochaPath = path.resolve(__dirname, '../node_modules/.bin/_mocha');

  var cmd = mochaPath;
  cmd += ' --harmony --recursive test/load';

  exec(cmd, function execCallback (err, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);

    done(err);
  });
}

module.exports = apiLoadSetup;
