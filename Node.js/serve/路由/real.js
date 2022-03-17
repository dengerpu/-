//1.引入系统模板http
//2.创建网站服务器
//3.为网站服务器添加请求时间
//4.实现路由功能
//	1.获取客户端的请求方式
//	2.获取客户端的请求地址
const http = require('http');
const app = http.createServer();
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime');
app.on('request',(req,res)=>{
	//获取请求地址
	let{pathname}=url.parse(req.url,true);
	pathname=pathname=='/'?pathname='/default.html':pathname;
	let realpathname=path.join(__dirname,'public'+pathname);

	 let type=mime.getType(realpathname); //可以得到文件的所有类型
	fs.readFile(realpathname,(err,doc)=>{
		if(err==null){
			res.writeHead(200,{
				'content-type':type
			})
			res.end(doc);
		}else{
			res.writeHead(404,{'content-type':'text/html;charset=utf8'});
			res.end('文件读取失败');
			return;
		}
	})

})
app.listen(3000);
console.log('网站服务器请求成功');