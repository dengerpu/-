const fs= require('fs');

let promise =new Promise((resolve,reject)=>{//第一个把结果传递出去，第二个把失败传递出去
	fs.readFile('./1.txt','utf8',(err,result)=>{
		if(err!=null){
			reject(err);
		}else{
			resolve(result);
		}
	})
})
promise.then(result=>console.log(result))
.catch(error=>console.log(error));
