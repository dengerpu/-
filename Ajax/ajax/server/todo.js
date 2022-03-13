//引入第三方模板express
const express = require('express');
//引入系统模板path
const path = require('path');
//引入数据库连接
require('./todo/model/connect.js');

//引入body-parser
const bodyParser = require('body-parser');

//创建网站服务器
const app = express();
//实现静态资源的访问
app.use(express.static(path.join(__dirname,'todo')));
//配置bodyParser
app.use(bodyParser.urlencoded({extended:false}));
const todo = require('./todo/router/TODO.js');
//创建todo路由
app.use('/todo',todo);

//监听端口
app.listen(80);
console.log('服务器启动成功');