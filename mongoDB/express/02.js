// express框架
// 引入express模板
const express = require('express');
//创建网站服务器
const app = express();

app.get('/',(req,res,next)=>{
	req.name='张三';
	next();
})
app.get('/',(req,res,next)=>{
	res.send(req.name);
})

app.listen(80);
console.log('网站服务器请就成功');