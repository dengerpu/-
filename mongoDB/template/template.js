// art-template第三方模板殷勤可以使代码结构更清晰，更容易和维护
// 1.先下载  npm install art-template  (这是腾讯开发的)
// 2.引入  const template = require('art-template')
// 3.template有一个方法，可以处理模板
// const  html = template('模板路径'，数据)
// 模板路径的文件后缀是.art

// 引入第三方模板 art-template
const template = require('art-template');
//引用系统模板
const path = require('path');
//一般路径用绝对路径

const pathname = path.join(__dirname,'views','index.art')

// 标准语法{{数据}}
// //原始语法  <%= 数据%>
// const html = template(pathname,{
// 	data:{
// 		header:"我是头部",
// 		footer:"我是尾部"
// 	}
// })
// console.log(html);


// if判断条件
// 标准语法 {{if 条件}}...{{else if 条件}}...{{/if}}
// 原始语法 <%if(条件) {%>...<%} else if(value) {%>...<%}>
// const html = template(pathname,{
// 	data:{
// 		age:10
// 	}
// })
// console.log(html)

// 原始数据输出
// {@数据>
// <%-数据%>
// const html = template(pathname,{
// 	data:'<h1>我是内容</h1>'
// })
// console.log(html);
// 


// 循环遍历数据
//标准语法  {{each 数组名称}}....{{/each}}  数据{{$index}} {{$value.name}}
//原始语法  <% for(var i=0;i<arr.length,i++){%>...<%}%>  <%=arr[i] %>
// const html = template(pathname,{
// 	arr:[{
// 		name:'zhansan'
// 	},{
// 		name:'李四'
// 	},{
// 		name:'王屋'
// 	}]
// })
// console.log(html);


//子模板
//标准语法{{include '模板路径'}}
//原始语法<% inclue('模板路径')%>
// {{include './header.art'}}
// <% include('./header.art')%>
// --------------------------------
// {{include './footer.art'}}
// <% include('./footer.art')%>
// const html = template(pathname,{});
// console.log(html);
// 


const views = path.join(__dirname,'views','extend.art');
//模板继承
//子模板版中需要写 {{extend '父模板路径'}}
//{{blcok '名字'}}内容{{/block}}
//父模板需要实现留坑  
// const html = template(views,{
// 	msg:'我是一个p'
// })
// console.log(html);
// 

// 模板配置
//导入变量  需要第三方插件  dateformat
const dateFormat = require('dateformat');
const data = path.join(__dirname,'views','data.art');
//导入变量
template.defaults.imports.dateFormat=dateFormat;

//设置模板根目录
template.defaults.root=path.join(__dirname,'views')
//设置默认后缀
template.defaults.extname='.art'
const html = template('data',{
	date:new Date()
})
console.log(html);



