var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var concat = require('gulp-concat');

var paths = {
  sass: ['./scss/**/*.scss', './app/components/**/*.scss', './app/shared/**/*.scss'],
  js: [ './app/*.js', './app/**/**/*.js',
        './app/**/**/*.*.js' ],
  templates: [ './app/components/**/*.html', './app/shared/**/*.html' ]
};

gulp.task('default', ['sass']);

gulp.task('js', function() {
  return gulp.src(paths.js)
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./www/js/'));
});

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('zy-sass', function(done) {
  gulp.src([ paths.sass[1], paths.sass[2] ])
    .pipe(sass())
    .on('error', sass.logError)
    .pipe( concat('style.css') )
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('templates', function() {
  gulp.src(paths.templates)
    .pipe(gulp.dest('./www/templates/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.sass[0], ['sass']);
  gulp.watch([ paths.sass[1], paths.sass[2] ], ['zy-sass']);
  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.templates, ['templates']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
