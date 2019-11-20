var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.sendfile(__dirname + '/public/vue/index.html'); // 绝对路径（/public/vue/index.html），__dirname表示服务器文件的根目录
});
module.exports = router;
