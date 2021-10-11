const { watch, src, dest } = require('gulp');
const sassModule = require('sass');
const gulpSass = require('gulp-sass');

const sass = gulpSass(sassModule);

const stylesPath = './assets/stylesheet/**/*.scss';

function buildStyles() {
  return src(stylesPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./dist/stylesheet'));
}

exports.watchFiles = function () {
  watch(stylesPath, { ignoreInitial: false }, buildStyles);
}