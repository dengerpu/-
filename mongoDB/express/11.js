const express = require('express');
const app = express();
const path = require('path');
//模板引擎
//设置渲染引擎的方式
app.engine('art',require('express-art-template'));
//设置默认模板目录
app.set('views',path.join(__dirname,'views'));
//设置默认后缀
app.set('view engine','art');

app.get('/',(req,res)=>{
	res.render('add');
})
app.listen(80);
console.log('服务器启动成功');