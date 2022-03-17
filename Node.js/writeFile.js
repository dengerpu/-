const fs=require('fs');

// 写入文件内容
// fs.writeFile('文件路径/名称','数据'，callback)
// 没有文件会自动创建文件

const content= '<h3>正在使用fs的readFile往文件中写入内容</h3>';
fs.writeFile('./index.html',content,err=>{
	if(err!=null){  //表明写入错误，打印错误信息
		console.log(err);
		return;
	}
	console.log('文件写入成功');
})