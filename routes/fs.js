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
	fs.writeFile('fs/index.js', '写入内容', err => { // 如果要写入的文件(index.js)不存在, 系统会自动创建一个index.js文件，并将内容写入文件，注意: 该函数不能连续写入，只能写入一次，不能连续写入
		if (err) {
			console.log(err)
			res.send(err)
		} else {
			res.send('写入成功')
		}
	})
})
// fs.writeFile 连续写入文件
router.get('/appendFile', function (req,res,next) {
	fs.appendFile('fs/fs.js', `\n追加内容写入的内容`, err => { // 如果要写入的文件(index.js)不存在, 系统会自动创建一个index.js文件，并将内容连续写入文件
		if (err) {
			console.log(err)
			res.send(err)
		} else {
			res.send('追加成功')
		}
	})
})
// fs.readFile 读取文件
router.get('/readFile', function (req,res,next) {
	fs.readFile('fs/fs.js', (err, data) => {
		if (err) {
			console.log(err)
			res.send(err)
		} else {
			console.log(data.toString(), 'data')
			res.send(data.toString())
		}
	})
})
// fs.readdir 读取目录
router.get('/readdir', function (req,res,next) {
	fs.readdir('public', (err, data) => {
		if (err) {
			console.log(err)
			res.send(err)
		} else {
			console.log(data,'data')
			res.send(data.toString())
		}
	})
})
// fs.readdir 重命名
router.get('/rename', function (req,res,next) {
	fs.rename('fs/yuan.js', 'yuanTest.js', (err) => {
		if (err) {
			console.log(err)
			res.send(err)
		} else {
			res.send('重命名成功')
		}
	})
})
// fs.readdir 剪切
router.get('/renameCut', function (req,res,next) {
	fs.rename('yuan.js', 'fs/yuan.js', (err) => {
		if (err) {
			console.log(err)
			res.send(err)
		} else {
			res.send('剪切成功')
		}
	})
})


module.exports = router;
