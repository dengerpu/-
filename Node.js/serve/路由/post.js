const http = require('http');
const app = http.createServer();
const url =require('url');
const querystring = require('querystring');  //处理请求参数模块
app.on('request',function(req,res){
	res.writeHead(200,{'content-type':'text/html;charset=utf8'})
	// res.end('<h2>启动成功</h2>');
	// post参数是通过事件方式接收的，data传递过程中触发的事件，end传递完成触发的事件
	let str="";
	req.on('data',params=>{
		str+=params;
	})
	req.on('end',()=>{
		console.log(str);
	})
	console.log(querystring.parse(str));
	res.end("提交成功");
})

app.listen(3000);
console.log("网站服务器启动成功");