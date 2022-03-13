
const express = require('express');
const app = express();
const path = require('path');
//静态资源的访问
app.use(express.static(path.join(__dirname,'public')));

app.listen(80);
console.log('服务器启动成功');