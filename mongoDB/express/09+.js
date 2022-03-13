
const express = require('express');
const app = express();

app.get('/find/:id/:name',(req,res)=>{
	console.log(req.params);
	res.send();
})

app.listen(80);
console.log('服务器启动成功');