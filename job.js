// Nodejs定时任务（node-schedule)，教程:https://www.jianshu.com/p/8d303ff8fdeb

const schedule = require('node-schedule');

const  scheduleCronstyle = ()=>{
	//每隔5s定时执行一次:
	schedule.scheduleJob('*/5 * * * * ?',()=>{
		console.log('scheduleCronstyle:' + new Date());
	});
}

scheduleCronstyle();
