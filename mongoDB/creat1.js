const mongoose = require('mongoose');  


//连接数据库
mongoose.connect('mongodb://localhost/playground')
.then(()=>console.log("连接数据库成功"))
.catch((err)=>console.log("连接服务器失败",err));

// 创建集合规则
const courseschema=new mongoose.Schema({
	name:{
		type:String,
		required:true,  //该属性必须有  required:[true,'自定义错误的内容']
		trim:true,    //去掉字符串两边的空格
		minlengt:2,
		maxlength:10
	},
	author:String,
	age:{
		type:Number,
		min:18,
		max:100,
	},
	data:{
		type:String,
		default:Date().now,
	}
}
)
const Course1 = mongoose.model('Course1',courseschema);  //创建集合

const User = mongoose.model('User',new mongoose.Schema({
	name:String,
	age:Number,
	email:String,
	password:String,
	hobbies: [String]
}));

//向集合中插入数据
//
// Course1.create({name:"java",author:"pink",age:20})
// .then(result=>console.log(result));

//查找集合中的数据
// User.find().then(result=>console.log(result));  //find不写参数查找的是所有的数据，返回的是数组对象
// User.find({name:'张三'}).then(result=>console.log(result));  //返回的是一个数组对象，里面是集合
// 
// User.findOne().then(result=>console.log(result));   //不写参数默认返回第一个对象，返回的是对象
// User.findOne({name:'张三'}).then(result=>console.log(result)); //返回的是集合对象
// 
// 

// // 匹配大于,小于
// User.find({age:{$gt:20,$lt:50}}).then(result=>console.log(result));  //$gt大于  ，$lt小于

// 匹配包含
// User.find({hobbies:{$in:['足球']}}).then(result=>console.log(result));
//

// 选择要查询的字段
// User.find().select('name email -_id').then(result=>console.log(result));  //不想查找那个，在哪个前面加-

//排序
// User.find().sort('-age').then(result=>console.log(result));//默认从小到大排序，向从大到小，添加个-号

// skip,跳过多少条数据，limit限制查询数量
// User.find().skip(2).limit(2).then(result=>console.log(result));  //做分页功能可以用到


// 删除文档
// Course1.findOneAndDelete({name:'java'}).then(result=>console.log(result));  //删除单个，有多个删除第一个
// Course1.deleteMany({name:'java'}).then(result=>console.log(result));  //删除多个
// 


// 更新文档 第一个参数.查询条件，第二个参数 要修改的值
// Course1.updateOne({name:'java1'},{name:'java'}).then(result=>console.log(result));
// Course1.updateMany({name:'java'},{age:21}).then(result=>console.log(result));
