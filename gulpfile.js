const { watch, src, dest } = require('gulp');
const sassModule = require('sass');
const gulpSass = require('gulp-sass');

const sass = gulpSass(sassModule);

function buildStyles() {
  return src('./assets/stylesheet/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./dist/stylesheet'));
}

exports.watchFiles = function () {
  watch('./assets/stylesheet/**/*.scss', { ignoreInitial: false }, buildStyles);
}