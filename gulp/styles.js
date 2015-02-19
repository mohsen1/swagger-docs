'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')();

gulp.task('styles', function () {

  var lessOptions = {
    paths: [
      'bower_components',
      paths.src + '/app',
      paths.src + '/components',
      paths.src + '/directives'
    ]
  };

  var injectFiles = gulp.src([
    paths.src + '/{app,components,directives}/**/*.less',
    '!' + paths.src + '/app/index.less',
    '!' + paths.src + '/app/vendor.less'
  ], { read: false });

  var injectOptions = {
    transform: function(filePath) {
      filePath = filePath.replace(paths.src + '/app/', '');
      filePath = filePath.replace(paths.src + '/components/', '../components/');
      filePath = filePath.replace(paths.src + '/directives/', '../directives/');
      return '@import \'' + filePath + '\';';
    },
    starttag: '// injector',
    endtag: '// endinjector',
    addRootSlash: false
  };

  var indexFilter = $.filter('index.less');

  return gulp.src([
    paths.src + '/app/index.less',
    paths.src + '/app/vendor.less'
  ])
    .pipe(indexFilter)
    .pipe($.inject(injectFiles, injectOptions))
    .pipe(indexFilter.restore())
    .pipe($.less(lessOptions))
    .on('error', function(err){
      console.log(err.toString());
    })

  .pipe($.autoprefixer())
    .on('error', function handleError(err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe(gulp.dest(paths.tmp + '/serve/app/'));
});
