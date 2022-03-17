const fs = require ('fs');
//可以让异步函数返回promise对象
const promisify = require('util').promisify;
const readFile = promisify(fs.readFile);//让其返回promise对象

async function run(){
	let r1= await readFile('./1.txt','utf8')
	let r2= await readFile('./2.txt','utf8')
	let r3= await readFile('./3.txt','utf8')
	console.log(r1);
	console.log(r2);
	console.log(r3);
}
run();