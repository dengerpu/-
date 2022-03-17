// 系统模板fs文件操作
// f:file文件，s:system系统，文件操作系统
const fs = require('fs');

// 读取文件内容

// fs.readFile('文件路径/文件名称'[,'文件编码'],callback);
fs.readFile('./require.js','utf8',(err,doc)=>{
	if(err==null){//说明读取成功
		console.log(doc);
	} 
})