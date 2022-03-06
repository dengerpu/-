const express = require('express');
const app = express();
const session = require('express-session');
const formidable = require('formidable');
app.use(session({
	secret:'keyboard cat',
	resave: false,
	saveUninitialized:false,
	cookie:{
		maxAge:1*60*60*100
	}
}))
app.use((req,res,next)=>{
	// 注意：如果跨域请求中涉及到cookie信息传递，值不可以为*号 比如是具体的域名信息
	//设置允许所有的人访问我
	res.header('Access-Control-Allow-Origin','http://localhost');
	//允许客户端以哪种请求访问
	res.header('Access-Control-Allow-Methods','get,post');
	//允许客户端发送请求时携带cookie
	res.header('Access-Control-Allow-Credentials',true);
	next();
})
app.get('/',(req,res)=>{
	res.send('3000端口')
})
app.get('/request',(req,res)=>{
	// //接收客户端传递过来的函数名称
	// const fnName = req.query.callback;
	// //将对应的函数调用代码返回给客户端
	// const data = JSON.stringify({name:'zhangsan'});
	// const result = fnName+'('+data+')'
	// res.send(result);
	// 
	// express框架提供了jsonp方法
	res.jsonp({name:"张三三"});
})

//CORS跨域资源共享
app.get('/cors',(req,res)=>{
	res.send({name:"1233"});
})
//实现登陆功能
app.post('/login',(req,res)=>{
	//创建表单解析对象
	var form = formidable.IncomingForm();
	form.parse(req,(err,fields,files)=>{
		const {username,password} = fields;
			// 用户名密码比对
		if (username == 'dengerpu' && password == '123456') {
			// 设置session
			req.session.isLogin = true;
			res.send({message: '登录成功'});
		} else {
			res.send({message: '登录失败, 用户名或密码错误'});
		}
	})
})
app.get('/checkLogin', (req, res) => {
	// 判断用户是否处于登录状态
	if (req.session.isLogin) {
		res.send({message: '处于登录状态'})
	} else {
		res.send({message: '处于未登录状态'})
	}
});

app.listen(3000);
console.log('3000端口服务器已经启动成功');