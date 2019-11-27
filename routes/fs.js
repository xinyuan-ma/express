var express = require('express');
var router = express.Router();
var fs = require('fs')
var readline = require('readline'); // 逐行读取文件，保证读取的内容原样输出
const tank = require('../db').tank

// stat 检查一个目录是一个文件还是目录,也可以用于判断目录或文件是否存在
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
// fs.rename 重命名
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
// fs.rename 剪切
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
// fs.rmdir 删除目录
router.get('/rmdir', function (req,res,next) {
	fs.rmdir('css', (err) => {
		if (err) {
			console.log(err)
			res.send(err)
		} else {
			res.send('删除目录成功')
		}
	})
})
// fs.unlink 删除文件(包括删除图片等)
router.get('/unlink', function (req,res,next) {
	fs.unlink('fs/img.png', (err) => {
		if (err) {
			console.log(err)
			res.send(err)
		} else {
			res.send('删除文件')
		}
	})
})
// 找到是否用upload目录，没有的话就创建
router.get('/upload', function (req,res,next) {
	fs.stat('upload/index.js', (err, data) => { // fs.stat可以用于检测目录或文件是否存在
		if (err) {
			console.log(err, 'err')
			fs.writeFile('upload/index.js', '写入文件', (err1) => {
				if (err1) {
					console.log(err1)
				} else {
					res.send(`upload目录创建成功`)
				}
			})
		} else {
			res.send(`upload/index.js目录存在`)
		}
	})
})

// 找到public文件下所有的目录
router.get('/public', function (req,res,next) {
// 读取目录全部文件
	fs.readdir('public', (err, files) => {
		if(err) {
			console.log(err);
			return false;
		} else {
			// 判断是目录还是文件夹
			console.log(files,files.length, 'files');

			let filesArr = [];

			(function getFile(i) {

				// 循环结束
				if(i == files.length) {
					// 打印出所有目录
					console.log("目录：");
					console.log(filesArr);
					return false;
				}

				// 判断目录是文件还是文件夹
				fs.stat('public/' + files[i], (error, stats) => {

					if(stats.isDirectory()) {
						filesArr.push(files[i]);
					}

					// 递归调用
					getFile(i+1);

				})
			})(0)
		}
	})
})

// 流读取文件，可以解决大文件时，优化系统性能，减少用户等待时间
router.get('/fileReadStream', function (req, res, next) {
	let readFileStream = fs.createReadStream('package.json')
	let count = 0;
	let str = ''
	readFileStream.on('data', (chunk) => {
		console.log(`${++count}`)
		str +=chunk
	})
	readFileStream.on('end', () => {
		res.send(str)
	})
})
// 逐行读取文件
router.get('/readline', function (req,res,next) {
	var fRead = fs.createReadStream('package-lock.json');
	var objReadline = readline.createInterface({
		input:fRead
	});
	var arr = new Array();
	objReadline.on('line',function (line) {
		console.log(line, 'line')
		arr.push(`<br>${line}`);
		//console.log('line:'+ line);
	});
	objReadline.on('close',function () {
		// console.log(arr);
		res.send(arr.toString().replace(/,,/g, ',').replace(/{,/g, '{').replace(/},/g, '}'))
	});
})

// 流写入文件
router.get('/createWriteStream', function (req, res, next) {
	let writeStream = fs.createWriteStream('fs/yuan.js')
	writeStream.write('流写入的内容1221', 'utf8')
	writeStream.end(); // 一定要end，否则接口会一直waiting
	writeStream.on('finish', () => {
		res.send('写入完成')
	})
})
module.exports = router;
