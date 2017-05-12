// svn 更新时使用

var lessrev = true;
var jsminrev = true;

var gulp = require('gulp'),
  fs = require('fs'),
  less = require('gulp-less'),
  csso = require('gulp-csso'),
  livereload = require('gulp-livereload'),
  uglify = require('gulp-uglify'),
  minifycss = require('gulp-minify-css'),
  rev = require('gulp-rev'),
  replace = require('gulp-replace'),
  revCollector = require('gulp-rev-collector'),
  connect = require('gulp-connect');
  rename = require('gulp-rename');

  var gulp_webpack = require('gulp-webpack')
  var webpack= require('webpack');
  var webpack_config = require('./webpack.config.js');

  // less 编译
  gulp.task('less', function() {
      var src = ['./test/src/less/*.less'];
      var dest1 = './test/src/css/';
      return gulp.src(src)
      .pipe(less())
      .pipe(minifycss())
      // 项目部署时开启
      // 本地输出
      .pipe(gulp.dest(dest1));
  });
  //定义监听文件修改任务
  gulp.task('watch', function(event) {
      livereload.listen();
      gulp.watch(['./test/src/less/*.less'], ['less','buildjs']);
      gulp.watch(['test/src/index.js','test/src/html/*.js'], ['less','buildjs']);

  });
  // 生成js文件
  gulp.task('buildjs',['less'],function(){
    gulp.src('./test/src/index.js')
      .pipe(gulp_webpack(webpack_config,webpack))
          .pipe(gulp.dest('./test/dist/'))
      .pipe(livereload());
  });

  //定义默认任务
  gulp.task('default',['watch']);
  gulp.run('default');
