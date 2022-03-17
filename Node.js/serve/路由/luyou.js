const http = require('http');
const app = http.createServer();
const path = require('path');
const url = require('url');
const fs = require('fs');
const mime =require('mime'); // 下面的getType方法可以获取文件的所有类型
const querystring = require('querystring');
//处理请求参数模块
app.on('request',(req,res)=>{
	let {pathname}=url.parse(req.url,true);
	pathname=pathname=='/'?pathname='/default.html':pathname;
	const realpathname=path.join(__dirname,'public'+pathname);
	let type=mime.getType(realpathname);
	fs.readFile(realpathname,function(err,doc){
		if(err!=null){
			res.writeHead(404,{"content-type":"text/plain;charset=utf8"})
			res.end("读取文件出错");
			return;
		}else{
			res.writeHead(200,{'content-type':type});
			res.end(doc);
		}
	})
})
app.listen(3000);
console.log('网站服务器启动成功');