const { watch, src, dest } = require('gulp');
const sassModule = require('sass');
const gulpSass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const clean = require("gulp-clean-css");

const sass = gulpSass(sassModule);

function buildStyles() {
  return src('./assets/stylesheet/index.scss')
    .pipe(sass({ includePaths: ['./node_modules'] }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(
        clean({
          level: 2,
        })
    )
    .pipe(dest('./dist/stylesheet'));
}

exports.watchFiles = function () {
  watch('./assets/stylesheet/**/*.scss', { ignoreInitial: false }, buildStyles);
}