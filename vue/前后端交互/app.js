const express = require('express');
const bodyParser = require('body-parser');
//创建网站
const app =express();

app.use(bodyParser.urlencoded({extended:false}));
// 设置允许跨域访问该服务
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type,Access-Token');
    res.header("Access-Control-Allow-Credentials",true);
    res.header('Access-Control-Allow-Headers', 'mytoken');
    res.header("Access-Control-Allow-Headers:DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,X_Requested_With,If-Modified-Since,Cache-Control,Content-Type, Accept-Language, Origin, Accept-Encoding");
    res.setHeader("Access-Control-Allow-Credentials", "true");
		// 浏览器是会先发一次options请求，如果请求通过，则继续发送正式的post请求
        // 配置options的请求返回
		// if (req.getMethod().equals("OPTIONS")) {
		// 	res.setStatus(HttpStatus.SC_OK);
		// 	res.getWriter().write("OPTIONS returns OK");
		// 	return;
		// }
    next();
  });


app.get('/data',(req,res)=>{
    res.send('hello')
})
app.get('/data1',(req,res)=>{
    res.send('hello1')
})
app.get('/data2',(req,res)=>{
    res.send('hello2')
})

app.get('/fetch',(req,res)=>{
    res.send(req.query.id);
})
app.delete('/fetch',(req,res)=>{
    res.send(req.query.id);
})
app.delete('/fetch/:id',(req,res)=>{
    res.send(req.params.id)
})
app.put('/fetch',(req,res)=>{
    res.send(req.body);
})
app.post('/fetch',(req,res)=>{
    res.send(req.body);
})
//监听端口
app.listen(80);
console.log('网站服务器启动成功');