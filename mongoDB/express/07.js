//构建模块化路由
const express = require('express');
const app = express();
const home = require('./home.js');
const admin = require('./admin.js');
app.use('/home',home);
app.use('/admin',admin)

app.listen(80);
console.log('服务器启动成功');