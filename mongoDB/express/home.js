const express = require('express');
const home = express.Router();
home.get('/index',(req,res)=>{
	res.send('欢迎来到游客页面')
})
module.exports=home;