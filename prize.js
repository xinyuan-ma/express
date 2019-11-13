var g = ["一等奖", "二等奖", "三等奖", "未中奖"]; //奖项名称
var p = [20, 20, 20, 40]; //奖项的权重。也就是各个奖项的中奖几率占总数的比例。比如这个总数是100，二等奖的中奖几率就是5/100
var t = [1, 2, 4, 0]; //奖项个数、一等奖1个,二等奖2个,三等奖4个

function lottery() { //抽奖
	var s = p.reduce(function (pv, v) { //计算p数组中数值之和。1+5+20+74是100
		return pv + v;
	}, 0);
	console.log(s);
	var r = Math.random() * s;
	for (var i = 0, n = 0; i < p.length; i++) {
		n += p[i];
		if (n > r) break;
	}
	console.log(t[i]);
	if (t[i]-- > 0) {
		console.log(t);
		console.log(g[i]);
	} else {
		console.log("未中奖");
	}
}
module.exports = lottery;
