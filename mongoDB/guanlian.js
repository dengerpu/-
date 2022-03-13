const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost/abdicate',{useNewUrlParser: true})
.then(()=>console.log("连接数据库成功"))
.catch((err)=>console.log("连接数据库失败",err));

const User=mongoose.model('User',new mongoose.Schema({
	name:String,
	age:Number
}));
const Post=mongoose.model('Post',new mongoose.Schema({
	title:String,
	author:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'User'
	}
}))

// User.create({name:'王五',age:18})
// .then(result=>console.log(result));

// Post.create({title:'文章标题',author:'5e5a54aedb94d227b0c1e2c7'})
// .then(result=>console.log(result));

//查看关联文件的方法
Post.find().populate('author').then(result=>console.log(result));