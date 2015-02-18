'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

gulp.task('watch', ['inject'], function () {
  gulp.watch([
    paths.src + '/*.html',
    paths.src + '/{app,components,directives}/**/*.less',
    paths.src + '/{app,components,directives,services}/**/*.js',
    'bower.json'
  ], ['inject']);
});
