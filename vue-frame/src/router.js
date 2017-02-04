const routers = [{
	path: '/index',
	component: (resolve) => {
		require(["./views/index.vue"], resolve);
	}
},{path: '/countdown',//倒计时
	component: (resolve) => {
		require(["./views/countdown.vue"], resolve);
	}
}, {
	path: '*',
	redirect: '/index'
}];
export default routers;