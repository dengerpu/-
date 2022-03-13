//引入服务器模板
const http = require('http');
//导入数据库
require('./model/connect.js');
const router = require('./route/index.js');
//引入art-template模板引擎
const template = require('art-template');
//引入path
const path = require('path');
//引入serve模板
const serveStatic = require('serve-static');

//日期处理
const dateformat = require('dateformat');

//设置模板的根目录
template.defaults.root = path.join(__dirname,'views');
//设置默认后缀
template.defaults.extname='.art';
//处理日期格式
template.defaults.imports.dateformat = dateformat;

//学生信息集合
const Student = require('./model/user.js');

//创建网站服务器
const app = http.createServer();
//实现静态资源访问服务
const serve = serveStatic(path.join(__dirname,'public'));


//为客户端请求添加事件
app.on('request',(req,res)=>{
	router(req,res,()=>{});
	serve(req,res,()=>{});  //静态资源访问
});
app.listen(80);
console.log('网站服务器启动成功');