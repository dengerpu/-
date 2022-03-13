//引入数据库模板
const mongoose = require('mongoose');
const Task = mongoose.model('Task',new mongoose.Schema({
	completed:{
		type:Boolean,
		default:false
	},
	title:String
}));
// Task.create({
// 	completed:false,
// 	title:"打豆豆"
// })

module.exports = Task;