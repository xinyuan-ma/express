let tank = require('./db').tank

// let promise = new Promise(function(resolve, reject){
// 	resolve(tank.find({
// 		'test': 'xinyuan'
// 	}));
// })
// promise.then( res => {
// 	console.log(res, 123)
// })

tank.find({
	'test': 'xinyuan'
}).then(res => {
	console.log(res,123)
})
