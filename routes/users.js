var express = require('express');
var router = express.Router();

router.get('/ejs', function (req, res, next) {
    res.render('index', {
        title: 'ejs练习',
        user: {name: 'yuan'},
        arrs: [1, 2, 3],
        obj: {
            name: 'ejs',
            age: '18',
            sex: '男',
            back:'mei',
            front: 'front'
        }
    })
})

router.get('/jade', function(req, res, next) {
  // console.log(req.cookies.cookie, 222) // 不加密的话，使用req.cookies获取cookie
  // console.log(req.signedCookies.cookie, 222) // 加密的话，使用signedCookies获取cookie
  // res.send('respond');
    res.render("testJade", {
        title: 'jade练习',
        arrs: [1, 2, 3],
        obj: {
            name: 'jade',
            afge: 'kk'
        }
    })
});
/* GET users listing. */
router.get('/http', function (req, res, next) {
    res.writeHead(200, {
        "Content-Type": 'text/html;charset=UTF-8'
    })
    // 往页面打印值
    res.write('<p>这是node</p>')
    res.end()
})
router.get('/params/:userId/book/:password', function(req, res, next) {
  console.log(req.params)
  next()
  // res.send('respond with a resource1');
});
router.get('/params/:userId/book/:password', function(req, res, next) {
  console.log('Hello from A');
  next()
},function (req, res, next) {
  console.log('Hello from B!')
  next()
},function (req, res, next) {
  res.send('Hello from C!')
  })

function next1 (req, res, next) {
  console.log('next1'),
  next()
}
function next2 (req, res, next) {
  console.log('next2')
  next()
}
function next3 (req, res, next) {
  console.log('next3')
  res.send('next3')
}
router.get('/pass', [next1, next2, next3]);
module.exports = router;
