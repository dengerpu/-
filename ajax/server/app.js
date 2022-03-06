//引入express模板
const express = require('express');
//引入系统模板path
const path = require('path');
//引入第三方模板body-parser
const bodyParser = require('body-parser');
//引入系统模板，读取文件
const fs = require('fs');


//启动网站服务器
const app = express();
//实现静态资源访问
app.use(express.static(path.join(__dirname,'public')));
//使用bodyParser处理post请求参数 ，name=zhangsan&age=18
app.use(bodyParser.urlencoded({extended:false}));
//json数据格式 {name:'zhangsan',age:20};
// app.use(bodyParser.json());

app.get('/first',(req,res)=>{
	res.send('hello ajax');
})

app.get('/responseDate',(req,res)=>{
	res.send({"name":'zs',"age":5});
})

app.get('/get',(req,res)=>{
	res.send(req.query);
})
app.post('/post',(req,res)=>{
	res.send(req.body);
})
app.post('/json',(req,res)=>{
	res.send(req.body)
})
app.get('/readystate',(req,res)=>{
	res.send('ok');
})
app.get('/error',(req,res)=>{
	//res.status(500).send('请求资源错误');
	res.send('ok');
})
app.get('cache',(req,res)=>{
	fs.readFile('./text.txt',(err,doc)=>{
		res.send(doc);
	})
})


//监听端口
app.listen(80);
console.log('服务器启动成功');