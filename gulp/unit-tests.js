'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep');

var paths = gulp.paths;

function runTests (singleRun) {
  var bowerDeps = wiredep({
    directory: 'bower_components',
    exclude: ['bootstrap-sass-official'],
    dependencies: true,
    devDependencies: true
  });

  var testFiles = bowerDeps.js.concat([
    paths.tmp + '/serve/{app,components,directives,services}/**/*.js',
    paths.tmp + '/test-6to5/{app,components,directives,services}/**/*.spec.js',
    paths.tmp + '/test-6to5/{app,components,directives,services}/**/*.mock.js'
  ]);

  gulp.src(testFiles)
    .pipe($.karma({
      configFile: 'karma.conf.js',
      action: singleRun ? 'run': 'watch'
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
}

gulp.task('test', ['all-scripts'], function (done) {
  runTests(true /* singleRun */, done);
});
gulp.task('test:auto', ['all-scripts'], function (done) {
  runTests(false /* singleRun */, done);
});
gulp.task('test:watch', ['test:auto']); // synonym task
