// express框架
// 引入express模板
const express = require('express');
//创建网站服务器
const app = express();

var flag = true;
app.use('/login',(req,res,next)=>{
	if(flag){
		next();
	}	else{
		res.send('你还没有登陆');
	}
})
app.get('/login',(req,res)=>{
	res.send('欢迎来到登陆页面');
})
app.use((req,res)=>{
	res.status(404).send('页面不存在');
})
app.listen(80);
console.log('网站服务器请就成功');