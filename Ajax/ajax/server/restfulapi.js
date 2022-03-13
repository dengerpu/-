const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'restfulapi')));

app.get('/user',(req,res)=>{
	res.send('用户访问列表页面');
})
app.post('/user',(req,res)=>{
	res.send('用户添加数据');
})
app.get('/user/:id',(req,res)=>{
	const id = req.params.id;
	res.send('用户获取id为'+id+'的用户');
})
app.put('/user/:id',(req,res)=>{
	const id = req.params.id;
	res.send('用户修改id为'+id+'的用户');
})
app.delete('/user/:id',(req,res)=>{
	const id = req.params.id;
	res.send('用户删除id为'+id+'的用户');
})
app.get('/xml',(req,res)=>{
	res.header('content-type','text/xml');
	res.send('<root><name>张三</name><age></age></root>');
})
app.listen(80);
console.log('服务器创建成功');
