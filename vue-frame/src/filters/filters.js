"use strict"

/** 历史订单详情--旅行者信息状态
 * item.state
 */
exports.inforTravsta = travstate => {
	let statetext = "";
	let numstatu=parseInt(travstate);
	switch(numstatu) {
		case 1:
			statetext = "待完善";
			break;
		case 2:
			statetext = "已通过";
			break;
		case 3:
			statetext = "已取消";
			break;
		default:
			statetext ="未知";
		break
	}
	return statetext;
}

/*getTime*/
/**格式化时间
	 *  @param {getTime} s 秒
	 */
exports.getTime = (s) => {
	var mi = s;
	if(mi >= 0) {
		var s = mi;
		var day = Math.floor(s / (3600 * 24));
		var hours = Math.floor(s / 3600) - Math.floor(s / (3600 * 24)) * 24;
		var minutes = Math.floor(s / 60) - Math.floor(s / 3600) * 60;
		var second = Math.floor(s) - Math.floor(s / 60) * 60;
		var time = (day == 0 ? '' : day + '天') + hours + '小时' + minutes + '分' + second + '秒'
		return time;
	} else {
		return '0小时0分0秒';
	}
}
