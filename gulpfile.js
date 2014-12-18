'use strict';

var gulp = require('gulp');
var deploy = require('gulp-gh-pages');

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

gulp.task('deploy', ['build'], function () {
  gulp.src('./dist/**/*')
  .pipe(deploy({}));
});
