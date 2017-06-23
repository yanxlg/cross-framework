/**
 * 仅处理sass文件
 **/
const gulp =require('gulp');
const webpack =require('webpack');
const sass = require('gulp-sass');
const scss = require('gulp-scss');//ruby 需要安装bundler
const minify=require("gulp-minify");
const cleanCSS = require('gulp-clean-css');
const gulpWebpack=require("gulp-webpack");
const AssetsRelativePath=require("./gulp_css_url");
const cssbeautify=require("gulp-cssbeautify");
const importOnce=require("node-sass-import-once");
gulp.task('default', ["sass","sass:watch"],function() {
    console.log("develop is building");
});
gulp.task('sass', function () {
    return gulp.src('./package/**/*.scss')
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'expanded',
            importer:importOnce
        }).on('error', sass.logError))
        .pipe(AssetsRelativePath("package"))
        .pipe(cleanCSS({compatibility: 'ie10'})) //去除@import重复代码
        .pipe(cssbeautify())
        .pipe(gulp.dest('./package'));
});
gulp.task('sass:watch', function () {
    const watcher = gulp.watch('./package/**/*.scss', ['sass']);
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

