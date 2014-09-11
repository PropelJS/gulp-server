'use strict';

var exec = require('child_process').exec;
var path = require('path');

var gulp = null;
var config = null;

/**
 * Sets up the API Endpoint Test Task
 *
 * @param {Object} gulpRef The gulp instance to attach the task to
 * @param {Object} conf The configuration object
 */
function apiTestSetup(gulpRef, conf) {
  gulp = gulpRef;
  config = conf;

  gulp.task('endpoint', false, [], apiTestTask);
}

/**
 * Runs the API Endpoint Test Task
 *
 * @param {Function} done The callback function
 */
function apiTestTask(done) {
  var mochaPath = path.resolve(__dirname, '../node_modules/.bin/_mocha');

  var cmd = mochaPath;
  cmd += ' --harmony --recursive test/api';

  exec(cmd, function execCallback (err, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);

    done(err);
  });
}

module.exports = apiTestSetup;
