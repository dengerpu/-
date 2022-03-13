const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost/playground')
.then(()=>{console.log("数据库创建成功")})
.catch(err=>{console.log("创建失败",err)});

//创建集合(1.创建集合设定规则 2.创建集合)
const courseSchema = new mongoose.Schema({
	name:String,
	author:String,
	isPublished:Boolean
});   //设定集和规则

const Course = mongoose.model('Course',courseSchema);//courses
//第一个参数是数据库的名字，首字母要大写，第二个参数集合规则
//

//创建文档(1.创建集合实例，2.调用save方法保存到数据库中)
const course =new Course({
	name:"张三",
	author:"lisi",
	isPublished:true
}); 
course.save();  