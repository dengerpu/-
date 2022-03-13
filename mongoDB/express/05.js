// express框架
// 引入express模板
const express = require('express');
//创建网站服务器
const app = express();
const fs  = require('fs');
app.get('/index',(req,res,next)=>{
	// throw new Error('未知错误');  //手动制造一个错误
	fs.readFile('./清单1.txt','utf8',(err,result)=>{
		if(err!=null){
			next(err);
		}else{
			res.send(result);
		}
	})
})

app.use((err,req,res,next)=>{
	res.status(500).send(err.message);
})

app.listen(80);
console.log('网站服务器请就成功');