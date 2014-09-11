'use strict';

var gulp = require('gulp');

var config = {
  root: __dirname,
  src: ['**/*.js', '!node_modules/**', '!docs/**'],
  watch: ['lib/**/*.js'],
  statementsThreshold: 80,
  functionsThreshold: 80,
  branchesThreshold: 75,
  linesThreshold: 80
};

require('./lib/index')(gulp, config);
