// 创建web服务器模板
const http = require('http');
const app = http.createServer();  //返回的是网站服务器对象c
//第一个参数请求的事件名称，req请求对象。res响应
const url = require('url'); //内置url模块，用于处理url地址
//req.method方式获取请求方式
//req.url获取请求地址
//req.headers获取请求报文
app.on('request',(req,res)=>{
	// console.log(req.url);
	// if(req.method=='GET'){
	// 	res.end('get');
	// }else if (req.method=='POST') {
	// 	res.end('post');
	// }
	// console.log(req.headers);
	// console.log(req.headers['accept']);
 	// console.log(req.url);
     let {query,pathname}=url.parse(req.url,true);
     // console.log(query);
     // console.log(pathname);
     console.log(query.name);
	res.writeHead(200,{'content-type': 'text/html;charset=utf8'})
	if(pathname=='/'||pathname=='/index'){
		res.end('<h2>欢迎来到主页</h2>');
	}else if(pathname=='/list'){
		res.end('欢迎来到列表页');
	}else{
		res.end('页面没有找到');
	}

	
});
app.listen(3000);  //监听端口
console.log('网站服务器启动成功');