var express = require('express');
var router = express.Router();
var fs = require('fs')
const tank = require('../db').tank

// stat 检查一个目录是一个文件还是目录
router.get('/stat', function(req, res, next) {
  fs.stat('routes/index.js',  (error, stats)=> { // 注意： 这里文件的路径，要从根目录开始写
    if (error) {
      console.log(error, 'error')
    } else {
      console.log(stats, 'stats')
      console.log(`文件：${stats.isFile()}`)
      res.send(`文件：${stats.isFile()}`)
    }
  })
});

// fs.mkdir 创建目录
router.get('/mkdir', function (req,res,next) {
    // fs.mkdir('css', err => {
    //   if (err) {
    //     console.log(err)
    //     return false
    //   } else {
    //     console.log('创建目录成功')
    //     res.send('创建目录成功')
    //   }
    // })
    fs.mkdir('css', err => {
      if (err) {
        console.log(err)
	  	res.send(err)
      } else {
        res.send('目录创建成功')
      }
    })
})
// fs.rmdir 创建目录
router.get('/rmdir', function (req,res,next) {
	fs.rmdir('css', err => {
		if (err) {
			console.log(err)
			res.send(err)
		} else {
			res.send('目录删除成功')
		}
	})
})
// fs.writeFile 写入文件
router.get('/writeFile', function (req,res,next) {
	fs.writeFile('fs/index.js', '写入内容', err => { // 如果要写入的文件(index.js)不存在, 系统会自动创建一个index.js文件，并将内容写入文件，注意: 该函数不能连续写入，只能写入一次
		if (err) {
			console.log(err)
			res.send(err)
		} else {
			res.send('写入成功')
		}
	})
})


module.exports = router;
