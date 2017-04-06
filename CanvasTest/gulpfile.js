var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require("./webpack.config.js");
gulp.task('webpack', function () {
    var myConfig = Object.create(webpackConfig);
    return gulp
        .src('./src/main.js')
        .pipe(webpack(myConfig))
        .pipe(gulp.dest('./build'));
});

gulp.task('default', function(){
    gulp.watch('./src/*',['webpack']);
});
