const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

//const sass = require('gulp-sass')(require('sass'));

function css() {
    return gulp
        .src('scss/app.scss')
        .pipe(autoprefixer())
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(gulp.dest('css'));
}

gulp.task('css', css);