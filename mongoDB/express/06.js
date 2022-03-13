// express框架
// 引入express模板
const express = require('express');
//创建网站服务器
const app = express();
const fs  = require('fs');
const promisify = require('util').promisify;
const readFile = promisify(fs.readFile);

app.get('/index',async (req,res,next)=>{
	try{
	 	 // await readFile('01.js','utf8');
	 	 res.send('ok');
		
	} catch(ex){
		next(ex);
	}
})

app.listen(80);
console.log('网站服务器请就成功');