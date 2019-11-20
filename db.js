const Promise = require("bluebird");
const mongoose = require('mongoose');
Promise.promisifyAll(mongoose)
let path = 'mongodb://rwuser:Aa123456!QA@101.89.188.50:8635/activity?authSource=admin'
mongoose.connect(path,{
	keepAlive: 120,
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(res => {
	console.log('连接成功')
}).catch(err => {
	console.log(err)
})

var schema = new mongoose.Schema({
	test: {
		type: String
	},
	yuan: {
		type: Boolean,
		default: true
	},
	content: {
		type: String
	}
})

exports.tank = mongoose.model('TankTests', schema);

exports.mongoose = mongoose;
