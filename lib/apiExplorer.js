'use strict';

var gulp = null;
var config = null;

/**
 * Setups up the API Explorer Generation Task
 *
 * @param {Object} gulpRef The gulp instance to attach the task to
 * @param {Object} conf The configuration object
 */
function apiExplorerSetup(gulpRef, conf) {
  gulp = gulpRef;
  config = conf;

  gulp.task('explorer', 'Creates the API Explorer', [], apiExplorerTask);
}

// TODO: Implement
function apiExplorerTask() {
  console.log('API Explorer Task Goes Here');
}

module.exports = apiExplorerSetup;
