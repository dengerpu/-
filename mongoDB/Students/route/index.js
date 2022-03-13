//引入router模板
const getRouter = require('router');
//获取路由对象
const router = getRouter();
//学生信息集合
const Student = require('../model/user.js');
//引入art-template模板引擎
const template = require('art-template');
//引入系统木块
const querystring = require('querystring');


//呈现学生档案信息页面
router.get('/add',(req,res)=>{
	const html = template('add',{})
	res.end(html);
})
//呈现学生信息列表页面
router.get('/list',async (req,res)=>{
	let data = await Student.find();
	const html = template('list',{data})
	res.end(html);
})
//实现学生信息添加功能
router.post('/add',(req,res)=>{
	let str='';
	req.on('data',params=>{
		str+=params;
	})
	req.on('end',async ()=>{
		let data = await querystring.parse(str);
		Student.create(data);
		res.writeHead(301,{
			Location:'/list'
		})
		res.end();
	})
})
module.exports=router;