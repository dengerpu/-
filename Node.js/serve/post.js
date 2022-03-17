const http = require('http');
const app = http.createServer();
const querystring = require('querystring');
//处理请求参数模块
app.on('request',(req,res)=>{
	//post参数是通过事件的方式接受的
	//data当请求参数传递的时候触发data事件
	//end当参数传递完成的时候触发事件
	res.writeHead(200,{'content-type':'text/plain;charset=utf8'})
	let str='';
	req.on('data',params=>{
		str+=params;
	});
	req.on('end',params=>{
		
		console.log(querystring.parse(str));
	})
	res.end('提交成功');
})
app.listen(3000);
console.log('网站服务器启动成功');