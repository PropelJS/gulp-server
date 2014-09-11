'use strict';

var gulpModule = require('gulp-module');

/**
 * Sets up the gulp toolchain
 *
 * @param {Object} gulp The gulp instance to attach the tasks to
 * @param {Object} config The configuration object
 */
function setupGulp(gulp, config) {
  gulpModule(gulp, config);

  require('./unit')(gulp, config);
  defineDev(gulp, config);
  defineBuild(gulp, config);
  defineTest(gulp, config);
  defineLoad(gulp, config);
  defineBench(gulp, config);
  defineExplorer(gulp, config);
  defineEndpoint(gulp, config);
}

/**
 * Defines the developoment task
 *
 * @param {Object} gulp The gulp instance to attach the tasks to
 * @param {Object} config The configuration object
 */
function defineDev(gulp, config) {
  gulp.task('dev', 'Runs the Development Workflow', [], function() {
    var watcher = gulp.watch(config.watch, ['lint', 'endpoint', 'unit']);
    watcher.on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
  });
}

/**
 * Defines the test task
 *
 * @param {Object} gulp The gulp instance to attach the tasks to
 * @param {Object} config The configuration object
 */
function defineTest(gulp, config) {
  gulp.task('test', 'Runs Unit Tests Against Source Files', [
    'unit',
    'endpoint',
    'cover'
  ], function() {});
}

/**
 * Defines the build task
 *
 * @param {Object} gulp The gulp instance to attach the tasks to
 * @param {Object} config The configuration object
 */
function defineBuild(gulp, config) {
  gulp.task('build', 'Runs the Tools Needed for a Complete Build', [
    'lint',
    'test',
    'endpoint',
    'comp',
    'contribs',
    'todo',
    'changelog',
    'docs',
    'load',
    'bench',
    'explorer'
  ], function() {});
}

/**
 * Defines the load task
 *
 * @param {Object} gulp The gulp instance to attach the tasks to
 * @param {Object} config The configuration object
 */
function defineLoad(gulp, config) {
  require('./apiLoad')(gulp, config);
}

/**
 * Defines the bench task
 *
 * @param {Object} gulp The gulp instance to attach the tasks to
 * @param {Object} config The configuration object
 */
function defineBench(gulp, config) {
  require('./apiBench')(gulp, config);
}

/**
 * Defines the explorer task
 *
 * @param {Object} gulp The gulp instance to attach the tasks to
 * @param {Object} config The configuration object
 */
function defineExplorer(gulp, config) {
  require('./apiExplorer')(gulp, config);
}

/**
 * Defines the API Endpoint Testing Task
 *
 * @param {Object} gulp The gulp instance to attach the tasks to
 * @param {Object} config The configuration object
 */
function defineEndpoint(gulp, config) {
  require('./apiTest')(gulp, config);
}

module.exports = setupGulp;
