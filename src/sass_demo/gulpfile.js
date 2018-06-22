// 引入模块
const gulp = require("gulp"),
	sass = require("gulp-sass");

// 定制任务：编译sass
gulp.task("sass-task", function(){
	gulp.src("sass/*.scss")
		.pipe(sass({outputStyle: "expanded"}))
		.pipe(gulp.dest("css"));
});

// 监视
gulp.task("watch", function(){
	// 监视*.scss的修改，自动执行编译sass任务
	gulp.watch("sass/*.scss", ["sass-task"]);
});