var gulp = require('gulp')
var gutil = require('gulp-util')
var ghPages = require('gulp-gh-pages')
var webpack = require('webpack')
var del = require('del')
var replace = require('gulp-replace')
var runSequence = require('run-sequence')

gulp.task('clean', del.bind(null, ['./dist', './build'], { dot: true }))

gulp.task('webpack:build', function (callback) {
  var myConfig = require('./webpack.build.config.js')
  webpack(myConfig, function (err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack:build', err)
    }
    gutil.log('[webpack:build]', stats.toString({
      colors: true,
    }))

    callback()
  })
})

gulp.task('copy-index', function () {
  return gulp.src(['index.html'])
      .pipe(replace('/static/', ''))
      .pipe(gulp.dest('./dist'))
})

gulp.task('gh-pages', function () {
  return gulp.src('./dist/**/*')
    .pipe(ghPages())
})

gulp.task('deploy', function () {
  runSequence('clean', 'webpack:build', 'copy-index', 'gh-pages')
})
