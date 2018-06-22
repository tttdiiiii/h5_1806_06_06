/* 定义模块，依赖于 tools.js 模块 */
define(["module/tools"], function(tools){
	return {
		carousel: function(){
			console.log("初始化轮播图");
			tools.$();
			tools.css();
		},
		autoPlay : function(){
			console.log("自动轮播");
		},
		prev : function(){
			console.log("向前翻页");
		}
	};
});