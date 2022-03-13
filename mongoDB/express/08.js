//get参数和post参数获取
const express = require('express');
const app = express();
//get方式获取参数
// app.get('/',(req,res)=>{
// 	res.send(req.query);
// })

// post方式获取参数，需要借助于第三方模块


//引入模块
const bodyparser = require('body-parser');
//配置bodyparse参数
app.use(bodyparser.urlencoded({extended:false}));
app.post('/',(req,res)=>{
	console.log(req.body);
	res.send();
})

app.listen(80);
console.log('服务器启动成功');