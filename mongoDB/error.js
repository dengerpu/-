const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/playground')
.then(()=>console.log("数据库连接成功"))
.catch(err=>console.log("数据库连接失败",err));
//创建集合
const Course2=mongoose.model('Course2',new mongoose.Schema({
	name:{
		type:String,
		required:[true,'这个值是必须要有的'],
		minlength:[2,"长度不能小于2"],
		maxlength:[10,'长度不能大于10']
	},
	age:{
		type:Number,
		min:18,
		max:100
	},
	author:{
		type:String,
		validate:{    //自定义验证
			validator:v=>{   //返回布尔值，true为验证成功，v为要验证的值
				return v&&v.length>4

			},
			message:'传入的值不符合验证规则'  //自定义错误消息
		}
	},
	publish:{
		type:Date,
		default:Date.now
	},
	hobby:{
		type:String,
		//enum:['html','js','css']
		enum:{
			values:['html','js','css'],
			message:'分类名称要在一定的范围内才可以'
		}
	}
}));
Course2.create({name:'lisi',age:18,author:'za123',hobby:'htmls'}).then(result=>console.log(result))
.catch(error=>{
	//获取错误信息对象
	const err = error.errors;
	//循环错误信息对象
	for(var attr in err){
		console.log(err[attr]['message']);
	}
	
});