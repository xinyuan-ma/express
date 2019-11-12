var express = require('express');
var router = express.Router();
var http = require('http')
const tank = require('../db').tank

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('cookie', 'yuan', {signed: true})
  res.render('index', { title: 'yuan' });
  // res.send('Hello World!');
});
router.post('/', function(req, res, next) {
  console.log(req.body, 11)
  // res.render('index', { title: 'xinyuan' });
  // res.send('Hello World123!');
  tank.find({},{'_id': 0}).then(data => {
    console.log(data, 123)
    return res.json({
      code: data,
      result: 'post返回'
    });
  })

});
router.get('/http', function (req, res, next) {
  http.createServer(function (req, res) {
    res.writeHead(200, {
      "Content-Type": 'text/html;charset=UTF-8'
    })
    // 往页面打印值
    res.write('<p>这是node</p>')
    res.end()
  })
})

module.exports = router;
