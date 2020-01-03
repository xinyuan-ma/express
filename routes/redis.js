var express = require('express');
var router = express.Router();


router.post('/set', function(req, res, next) {
	console.log(req.body, 'req')
	let key = 'game:task'
	let value={
		userid:"12345677",
		taskid:"1",
		diamond:"100"
	}

	redisClient.set('1234','10', (err, res1) => {
		console.log(err, res1, 'hmset');
		redisClient.expire('1234',60);//60秒自动过期
		res.json({
			code: 1,
			data: {
				msg: res1
			}
		})
	})

	redisClient.hmset(key,value,function(err,res){ // 使用hash建数据
		if(err){
			console.log(err);
		}else{
			redisClient.expire(key,60);//60秒自动过期
			console.log(res, 'hmset');
		}
	});

	redisClient.hmget(key,['userid','taskid'],function(err,res){
		if(err){
			console.log(err);
		}else{
			console.log(res, 'hmget');
		}
	});


	redisClient.hset(key,'taskid','2',function(err,res){
		if(err){
			console.log(err);
		} else{
			console.log(res, 'hmget')
		}
	});

	redisClient.hget(key,'taskid',function(err,res){
		if(err){
			console.log(err);
		} else{
			console.log(res, 'hmget')
		}
	});
	redisClient.hgetall(key,function(err,res){
		if(err){
			console.log(err);
		} else{
			console.log(res, 'hmget')
		}
	});

	redisClient.hexists(key,'taskid',function(err,res){
		if(err){
			console.log(err);
		} else{
			console.log(res, 'hmget')
		}
	});
	redisClient.hincrby(key,'diamond',100,function(err,res){
		if(err){
			console.log(err);
		} else{
			console.log(res, 'hmget')
		}
	});


	redisClient.hdel(key,'diamond',function(err,res){
		if(err){
			console.log(err);
		} else{
			console.log(res, 'hmget')
		}
	});

	redisClient.hmget(key,['userid','taskid'],function(err,res){
		if(err){
			console.log(err);
		}else{
			console.log(res, 'hmget');
		}
	});
});

module.exports = router;
