var express = require('express');
var router = express.Router();
var http = require('http')
const tank = require('../db').tank

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('cookie', 'yuan', {signed: true})
  res.render('index', { title: 'yuan' });
  // res.send('Hello World!');
  res.sendfile(__dirname + '/public/dist/cookie.html');
});

router.post('/', function(req, res, next) {
  console.log(req.body, 11)
  tank.find({},{'_id': 0, '__v': 0}).then(data => {
    console.log(data, 'data是数据库返回的内容')
    return res.json({
      code: data,
      result: 'post返回'
    });
  })
});

module.exports = router;
