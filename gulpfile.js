
const gulp = require('gulp');

const sass = require('gulp-sass')(require('sass')); // sass => css;

const minifyCSS = require('gulp-minify-css'); // 压缩css代码

gulp.task('sass', async function () {
    return gulp.src('components/css/**/*.scss')
        .pipe(sass()) // 将sass 转化成 css
        .pipe(minifyCSS())  // 压缩css
        .pipe(gulp.dest('dist/css')) // 将压缩文件放入 dist/css里
})