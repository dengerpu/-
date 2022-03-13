// 搭建网站服务器，实现客户端与服务器端的通信
// 连接数据库，创建用户集合，向集合中插入文档
// 当用户访问/list时，将所有用户信息查询出来
// 	实现路由功能
// 	呈现用户列表页面
// 	从数据库中查询用户信息 将用户信息展示在列表中
// 将用户信息和表格HTML进行拼接并将拼接结果响应回客户端
// 当用户访问/add时，呈现表单页面，并实现添加用户信息功能
// 当用户访问/modify时，呈现修改页面，并实现修改用户信息功能
// 	修改用户信息分为两大步骤
// 		1.增加页面路由 呈现页面
// 			1.在点击修改按钮的时候 将用户ID传递到当前页面
// 			2.从数据库中查询当前用户信息 将用户信息展示到页面中
// 		2.实现用户修改功能
// 			1.指定表单的提交地址以及请求方式
// 			2.接受客户端传递过来的修改信息 找到用户 将用户信息更改为最新的
// 当用户访问/delete时，实现用户删除功能


//引入网站服务器模块
const http = require('http');
require('./model/index.js');  //引入连接数据库文件
const User=require('./model/user.js');  //引用集合规则
//引入url地址
const url = require('url');
//引入art-template模板
const template = require('art-template');
//引入系统木块
const path = require('path');
//引用处理请求参数模块
const querystring = require('querystring');

// 设置模板根目录
template.defaults.root=path.join(__dirname,'views');
//设置默认后缀
template.defaults.extname=".art";
//创建网站服务器
const server = http.createServer();

//为服务器对象添加请求事件
server.on('request',async (req,res)=>{
	let {query,pathname} = url.parse(req.url,true);
	pathname=pathname=='/'?pathname='/list':pathname;
	let method = req.method;
	if(method=='GET'){
		if(pathname=='/list'){
			let data=await User.find();  //获取数据库的内容
			const html = template('list',{data}) //将数据库内容导入到网页上
			res.end(html);
		}else if(pathname=='/add'){
			const html = template('add',{});
			res.end(html);
		}else if(pathname=='/modify'){
			let id=query.id.replace(/"/g,'');  //利用正则表达式替换掉两边的引号
			let user =await  User.findOne({_id: id});
			let hobbies = ['足球', '篮球', '橄榄球', '敲代码', '抽烟', '喝酒', '烫头', '吃饭', '睡觉', '打豆豆'];
			const html = template('modify',{user});
			res.end(html);
		}else if (pathname=='/remove') {
			let id=query.id.replace(/"/g,'');
			await User.findOneAndDelete({_id: id});
			res.writeHeader(301,{
				Location:'/list'
			});
			res.end();
		}
	}else if(method=='POST'){
		if(pathname=='/add'){
			let formdata='';
			req.on('data',params=>{
				formdata+=params;
			})
			req.on('end',async ()=>{
			let user=querystring.parse(formdata);
			await User.create(user);
			res.writeHeader(301,{
				Location: '/list'
			})
			res.end();
			});
		}else if (pathname=='/modify') {
			let formdata='';
			req.on('data',params=>{
				formdata+=params;
			})
			req.on('end',async ()=>{
			let user=querystring.parse(formdata);
			let id=query.id.replace(/"/g,'');
			await User.updateOne({_id: id},user);
			res.writeHeader(301,{
				Location: '/list'
			})
			res.end();
			});
		}

	}
	
})

server.listen(80);
console.log("网站服务器请求成功");