const http = require('http');
const app = http.createServer();  //获取网站服务器对象

const url = require("url");  //用于处理url地址


app.on("request",function(req,res){
	res.writeHead(200,{'content-type':'text/html;charset=utf8'})
	// console.log(url.parse(req.url));  加true可以解析为对象
	let {query,pathname}=url.parse(req.url,true);

	// console.log(req.method); //可以获取请求的方式
	let method=req.method.toLowerCase();
	console.log(method);
	res.end("<h2>响应已经收到</h2>");
})

app.listen(3000);  //监听端口号
console.log("网站服务器启动成功");
