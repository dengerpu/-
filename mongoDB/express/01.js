// express框架
// 引入express模板
const express = require('express');
//创建网站服务器
const app = express();

app.get('/',(req,res)=>{
	//send()方法内部会自动检测响应内容的类型
	//自动设置http状态码
	//自动设置响应的内容类型及编码
	// res.send('express框架');
	res.send({name:'张三',age:20});
})

app.listen(80);
console.log('网站服务器请就成功');