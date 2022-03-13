//引入数据库模板
const mongoose = require('mongoose');
//创建数据库集合以及集合规则
const Student = mongoose.model('Student',new mongoose.Schema({
	name:{
		type:String,
		required:true,
		minlength:2,
		maxlength:10
	},
	age:{
		type:Number,
		min:10,
		max:25
	},
	sex:{
		type:String
	},
	email:String,
	hobbies:[String],
	collage:String,
	enterDate:{
		type: Date,
		default:Date.now
	}
}))

module.exports=Student;