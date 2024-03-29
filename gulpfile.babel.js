'use strict'

import gulp from 'gulp'
import del from 'del'
import runSequence from 'run-sequence'
import gulpLoadPlugins from 'gulp-load-plugins'
import { spawn } from 'child_process'
import tildeImporter from 'node-sass-tilde-importer'

const $ = gulpLoadPlugins()
const browserSync = require('browser-sync').create()
const isProduction = process.env.NODE_ENV === 'production'

const onError = (err) => {
  console.log(err)
}

let suppressHugoErrors = false

// --

gulp.task('server', ['build'], () => {
  gulp.start('init-watch')
  $.watch(
    [
      'archetypes/**/*',
      'data/**/*',
      'content/**/*',
      'layouts/**/*',
      'static/**/*',
      'config.toml',
    ],
    () => gulp.start('hugo')
  )
})

gulp.task('server:with-drafts', ['build-preview'], () => {
  gulp.start('init-watch')
  $.watch(
    [
      'archetypes/**/*',
      'data/**/*',
      'content/**/*',
      'layouts/**/*',
      'static/**/*',
      'config.toml',
    ],
    () => gulp.start('hugo-preview')
  )
})

gulp.task('init-watch', () => {
  suppressHugoErrors = true
  browserSync.init({
    server: {
      baseDir: 'public',
    },
    open: false,
  })
  $.watch('src/sass/**/*.scss', () => gulp.start('sass'))
  $.watch('src/js/**/*.js', () => gulp.start('js-watch'))
  $.watch('src/images/**/*', () => gulp.start('images'))
})

gulp.task('build', () => {
  runSequence(
    ['sass', 'js', 'fa', 'fafonts', 'fonts', 'images', 'pub-delete'],
    'hugo'
  )
})

gulp.task('sass', () => {
  return gulp
    .src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/sass/**/*.scss'])
    .pipe($.plumber({ errorHandler: onError }))
    .pipe($.print())
    .pipe($.sassLint())
    .pipe($.sassLint.format())
    .pipe($.sass({ precision: 5, importer: tildeImporter }))
    .pipe($.autoprefixer(['ie >= 10', 'last 2 versions']))
    .pipe(
      $.if(
        isProduction,
        $.cssnano({ discardUnused: false, minifyFontValues: false })
      )
    )
    .pipe($.size({ gzip: true, showFiles: true }))
    .pipe(gulp.dest('static/css'))
    .pipe(browserSync.stream())
})

gulp.task('js-watch', ['js'], (cb) => {
  browserSync.reload()
  cb()
})

gulp.task('js', () => {
  return (
    gulp
      .src([
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/popper.js/dist/umd/popper.min.js',
        'src/js/**/*.js',
      ])
      // .pipe($.plumber({ errorHandler: onError }))
      // .pipe($.print())
      // .pipe($.babel())
      // .pipe($.concat('app.js'))
      // .pipe($.if(isProduction, $.uglify()))
      // .pipe($.size({ gzip: true, showFiles: true }))
      .pipe(gulp.dest('static/js'))
  )
})

gulp.task('fonts', () => {
  //return gulp.src('src/fonts/**/*.{woff,woff2}')
  return gulp.src('src/fonts/**/*.*').pipe(gulp.dest('static/fonts'))
})

// Move Fonts Folder to src/fonts
gulp.task('fafonts', function () {
  return gulp
    .src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('src/fonts'))
})

// Move Font Awesome CSS to src/css
gulp.task('fa', function () {
  return gulp
    .src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('static/css'))
})

gulp.task('images', () => {
  return gulp
    .src('src/images/**/*.{png,jpg,jpeg,gif,svg,webp,ico}')
    .pipe($.newer('static/images'))
    .pipe($.print())
    .pipe($.imagemin())
    .pipe(gulp.dest('static/images'))
})

gulp.task('cms-delete', () => {
  return del(['static/admin'], { dot: true })
})

gulp.task('pub-delete', () => {
  return del(['public/**', '!public'], {
    // dryRun: true,
    dot: true,
  }).then((paths) => {
    console.log(
      'Files and folders deleted:\n',
      paths.join('\n'),
      '\nTotal Files Deleted: ' + paths.length + '\n'
    )
  })
})
