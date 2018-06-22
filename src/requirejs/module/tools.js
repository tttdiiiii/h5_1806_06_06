/* 定义模块 */
define(function(){
	return {
		$ : function(){
			console.log("$函数，查找元素")
		},
		css : function(){
			console.log("获取、设置css样式")
		},
		on : function(){
			console.log("实现事件注册")
		}
	};
});