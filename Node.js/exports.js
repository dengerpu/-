function sum(a,b){
	console.log(a+b);
	console.log("我被调用了，哈哈哈");
}
let version = 1.0;

const  sayHi = name=> `你好，${name}`;

module.exports.version=version;
exports.sayHi=sayHi;
exports.sum=sum;
// module.exports.sum=sum;
