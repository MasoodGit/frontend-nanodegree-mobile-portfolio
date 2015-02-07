//include gulp
var gulp = require('gulp');

//include the plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var psi = require('psi');

var site ='localhost:8080';

// js lint task

gulp.task('lint', function() {
  return  gulp.src('./src/js/*.js','./src/views/js/*.js')
          .pipe(jshint())
          .pipe(jshint.reporter('default'));
});


