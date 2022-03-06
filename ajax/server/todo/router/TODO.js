const express = require('express');
const todo = express.Router();
//引入task任务集合
const Task = require('../model/todolist.js');
//对象校验
const Joi = require('joi');



//获取任务数据
todo.get('/task',async (req,res)=>{
	const data = await Task.find();
	res.send(data);
})
//数据库中添加任务
todo.post('/addTask',async (req,res)=>{
	const {title} = req.body;
	//验证规则
	const schema = {
		title:Joi.string().required().min(2).max(30)
	};
	//验证客户端传递过来的请求参数
	const {error} = Joi.validate(req.body,schema);
	//验证失败
	if(error){
		// 将错误信息响应给客户端
		return res.status(400).send({message: error.details[0].message})                                                                                        
	}
	//创建任务实例
	const task = new Task({
		title: title, completed: false
	})
	//执行插入操作
	await task.save();
	//响应
	setTimeout(()=>{
		res.send(task);
	},2000)
})

//实现任务的删除功能
todo.get('/deleteTask',async (req,res)=>{
	const id = req.query._id;
	const data = await Task.findOneAndDelete({_id:id});
	res.send(data);
})
//实现修改功能
todo.get('/modifyTask',async(req,res)=>{
	const {_id,completed,title}=req.query;
	if(completed){
		await Task.updateOne({_id:_id},{completed:completed});
	}
	if(title){
		await Task.updateOne({_id:_id},{title:title});
	}
	const data = await Task.findOne({_id:_id});
	res.send(data);
})
module.exports = todo;