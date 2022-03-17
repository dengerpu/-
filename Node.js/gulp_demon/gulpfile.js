// gulp中提供的办法
// 
// gulp.src():获取任务要处理的文件
// gulp.dest():输出文件
// gulp.task():建立任务
// gulp.watch():监控文件的变化


const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const fileinclude = require('gulp-file-include');
const csso = require('gulp-csso');
const less = require('gulp-less');
const uglify = require('gulp-uglify');  //压缩js
const babel = require('gulp-babel');   //js语法转换
//使用gulp.task()方法监理任务
//第一个参数任务名称，
gulp.task('first',()=>{
	console.log('第一个任务执行了');
	gulp.src('./src/css/*.css').
	pipe(gulp.dest('./dist/css'));
});

//html任务
//实现html文件压缩和抽取公共部分代码
//先安装 npm install htmlmin

gulp.task('htmlmin',()=>{
	gulp.src('src/*.html')
	.pipe(fileinclude()) 
	.pipe(htmlmin({ collapseWhitespace: true }))
	.pipe(gulp.dest('dist'));
});


//css任务
//csso压缩
//lesso压缩
gulp.task('cssmin',()=>{
	gulp.src(['./src/css/*.less','./src/css/*.css'])
	.pipe(less())  //将less语法转化为css语法
	.pipe(csso())	//css压缩
	.pipe(gulp.dest('./dist/css'))
})

// js任务
// es6语法转化，
// js压缩

gulp.task('jsmin',()=>{
	gulp.src('./src/js/*.js')
	.pipe(babel({
		//可以判断当前代码的运行环境 将代码转化为当前的运行环境
            presets: ['@babel/env']
        }))
	.pipe(uglify())
	.pipe(gulp.dest('./dist/js'))
})

// 复制其他文件夹

gulp.task('copy',()=>{
	gulp.src('./src/images/*')
	.pipe(gulp.dest('./dist/images'));
	gulp.src('./src/upload/*')
	.pipe(gulp.dest('./dist/upload'));
	gulp.src('./src/fonts/*')
	.pipe(gulp.dest('./dist/fonts'));
	gulp.src('./src/*.ico')
	.pipe(gulp.dest('./dist'));
})

//构建任务
gulp.task('default', ['htmlmin', 'cssmin', 'jsmin', 'copy']);
