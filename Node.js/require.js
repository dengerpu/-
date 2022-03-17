var js=require('./exports.js');
// exports是module.exports的别名(地址引用关系)，导出对象最终以module.exports为准

console.log(js.version);
console.log(js.sayHi);
js.sum(1,2);