//include gulp
var gulp = require('gulp');

//include the plugins
var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');
var minifyHTML = require('gulp-minify-html');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var uncss = require('gulp-uncss');

var site ='localhost:8080';

// js lint task

gulp.task('lint', function() {
  return  gulp.src('./src/**/*.js')
          .pipe(jshint())
          .pipe(jshint.reporter('default'));
});

//minify images for index html
gulp.task('imagemin', function(){
  return gulp.src('./src/img/*')
            .pipe(imagemin())
            .pipe(gulp.dest('./build/img'));
});

//minify images for pizza html
gulp.task('imageminPizza',function(){
  return gulp.src('./src/views/images/*')
             .pipe(imagemin())
             .pipe(gulp.dest('./build/views/images'));
});

//minify html pages
gulp.task('indexhtml', function(){
  return gulp.src('./src/*.html')
             .pipe(minifyHTML())
             .pipe(gulp.dest('./build'));
});

//minify views
gulp.task('pizzahtml',function(){
  return gulp.src('./src/views/*.html')
            .pipe(minifyHTML())
            .pipe(gulp.dest('./build/views'));
});

//minify mainjs
gulp.task('mainjs',function(){
  return gulp.src('./src/views/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./build/views/js/'));
});

//minify perfjs
gulp.task('perfjs',function(){
  return gulp.src('./src/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./build/js/'));
});

//minify main css
gulp.task('maincss', function(){
  return gulp.src('./src/css/*.css')
  .pipe(minifyCSS())
  .pipe(gulp.dest('./build/css/'));
});

gulp.task('viewcss',function(){
  return gulp.src('./src/views/css/*.css')
  .pipe(minifyCSS())
  .pipe(gulp.dest('./build/views/css/'));
});

gulp.task('removecss',function(){
  return gulp.src('./src/views/css/bootstrap-grid.css')
             .pipe(uncss({ html :['./src/views/pizza.html']}))
             .pipe(gulp.dest('./out'));
});


gulp.task('default',
  [
  'imagemin',
  'imageminPizza',
  'indexhtml',
  'pizzahtml',
  'mainjs',
  'perfjs',
  'maincss',
  'viewcss'
  ],function(){

});
