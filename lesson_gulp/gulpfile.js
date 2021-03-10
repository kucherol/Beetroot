const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const sassLint = require('gulp-sass-lint');
const notify = require("gulp-notify");

function liveReload() {
    browserSync.init({
        server: './app'
    });

    gulp.watch('app/sass/*.scss', styles);
    gulp.watch('app/*.html').on('change', browserSync.reload)
}
function styles() {
    return gulp.src('./app/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(['last 5 versions']))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream())
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(through(function () {
        this.emit("error", new Error("Something happend: Error message!"))
      }))
      .on("error", notify.onError({
        message: "Error: <%= error.message %>",
        title: "Error running something"
      }));
}

exports.default = liveReload;