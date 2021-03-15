const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const notify = require("gulp-notify");
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const del = require('del');
const zip = require('gulp-zip');
const htmlmin = require('gulp-htmlmin');

function liveReload() {
    browserSync.init({
        server: './app'
    });

    gulp.watch('app/sass/*.scss', styles);
    gulp.watch('app/js/main.js', script);
    gulp.watch('app/*.html').on('change', browserSync.reload)
}
function styles() {
    return gulp.src('./app/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(['last 5 versions']))
    .pipe(cleanCSS())
    .pipe(browserSync.stream())
    .pipe(gulp.dest('./app/css'));
}

function script() {
  return gulp.src(['./node_modules/jquery/dist/jquery.min.js',
  './node_modules/slick-carousel/slick/slick.min.js',
  './app/js/script.min.js'])
  .pipe(concat('script.min.js'))
  .pipe(uglify())
  .pipe(browserSync.stream())
  .pipe(gulp.dest('./app/js'))
}

function buildCSS() {
  return gulp.src('./app/css/main.css')
  .pipe(gulp.dest('./build/css'))
}

function buildHTML() {
  return gulp.src('./app/*.html')
  .pipe(htmlmin())
  .pipe(gulp.dest('./build'))
}

function buildJS() {
  return gulp.src('./app/js/main.js')
  .pipe(gulp.dest('./build/js'))
}

function buildImages() {
  return gulp.src('./app/images/*.*')
  .pipe(gulp.dest('./build/images'))
}

function cleanUp() {
  return del(['./build']);
}

function archive() {
  return gulp.src('./build/*')
  .pipe(zip('build.zip'))
  .pipe(gulp.dest('./'))
}

function build() {
  return gulp.parallel(
  cleanUp,
  gulp.series(
    buildCSS,
    buildHTML,
    buildJS,
    buildImages
  )
  )
}

exports.default = liveReload;
exports.build = build();
exports.archive = archive();