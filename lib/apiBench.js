'use strict';

var exec = require('child_process').exec;
var path = require('path');

var gulp = null;
var config = null;

/**
 * Setups up the API Benchmark Task
 *
 * @param {Object} gulpRef The gulp instance to attach the task to
 * @param {Object} conf The configuration object
 */
function apiBenchSetup(gulpRef, conf) {
  gulp = gulpRef;
  config = conf;

  gulp.task('bench', 'Runs the API Benchmarks', [], apiBenchTask);
}

/**
 * Runs the API Benchmark Task
 *
 * @param {Function} done The callback function
 */
function apiBenchTask(done) {
  var mochaPath = path.resolve(__dirname, '../node_modules/.bin/_mocha');

  var cmd = mochaPath;
  cmd += ' --harmony --recursive test/bench';

  exec(cmd, function execCallback (err, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);

    done(err);
  });
}

module.exports = apiBenchSetup;
