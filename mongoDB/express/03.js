// express框架
// 引入express模板
const express = require('express');
//创建网站服务器
const app = express();

// app.use((req,res,next)=>{
// 	// res.send('网站正在维护中');
// 	console.log('hahah ');
// 	next();
// })
app.use('/',(req,res,next)=>{
	// res.send('网站正在维护中');
	console.log('hahah ');
	next();
})
app.get('/',(req,res)=>{
	res.send('11');
})
app.listen(80);
console.log('网站服务器请就成功');