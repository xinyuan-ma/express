var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var history = require('connect-history-api-fallback');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var fsRouter = require('./routes/fs');
var vueRouter = require('./routes/vue');

var app = express();
app.all('/', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade'); // 使用jade模板引擎
app.set('view engine', 'ejs'); // 使用ejs模板引擎
app.use(logger('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser('secret')); // 对cookie进行加密
app.use(cookieParser()); // 对cookie进行加密

// var fs = require('fs')
// fs.stat('db.js',  (error, stats) => {
//   if (error) {
//     console.log(error, 'error');
//     return false;
//   } else {
//     console.log(stats)
//     console.log(`文件：${stats.isFile()}`);
//     // Console：文件：true
//     console.log(`目录：${stats.isDirectory()}`);
//     // Console：目录：false
//   }
// })

// get请求的路由
app.use('/user', usersRouter);
app.use('/fs', fsRouter);
// 设置vue项目静态web服务器hash模式（路径中有#）
app.use('/vue', vueRouter);
// 设置静态文件地址
app.use(history()); // vue项目为history模式，配置静态服务器
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/dist'))); // dist文件是vue项目打包出来的文件
// app.use(express.static(path.join(__dirname, 'public/vue')));
// 设置vue项目静态web服务器history模式
app.use('/', indexRouter); // 这个要放到最后面，否则node不能使用get请求，因为所有的get请求都会走到这里

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
