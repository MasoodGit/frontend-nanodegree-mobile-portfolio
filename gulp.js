//include gulp
var gulp = require('gulp');

//include the plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// js lint task

gulp.task('lint', function() {
  return  gulp.src()
          .pipe(jshint())
          .pipe(jshint.reporter('default'));
});

