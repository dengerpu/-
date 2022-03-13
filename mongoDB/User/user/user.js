//引入数据库模块
const mongoose = require('mongoose');
//创建数据库对象规则
const User=mongoose.model('User',new mongoose.Schema({
	name:{
		type:String,
		required:true,
		minlength:2,
		maxlength:20
	},
	age:{
		type:Number,
		min:18,
		max:80
	},
	email:String,
	hobbies:[String],
	password:String
}))
module.exports.User=User;