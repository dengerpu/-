import React from 'react'
import ReactDOM from 'react-dom'

//创建虚拟DOM元素
// 参数1：创建元素类型，字符串，表示元素的名称
// 参数2：是一个对象或者NULL，表示当前这个DOM元素的属性
// 参数3：子节点（包含其他虚拟DOM获取文本子节点）
// 参数4：其他子节点

// const myh1 = React.createElement('h1',{id:'1',title:'这是利用react创建的标签'},'这是一个h1')
// const mydiv = React.createElement('div',null,'这是一个div',myh1)

//使用ReactDom 把虚拟DOM元素渲染到页面上
// 参数1：要渲染的那个DOM元素
// 参数2：指定页面上的DOM元素，当做容器

const mydiv = 
<div>
    <h1>这是一个h1</h1>
    <p>这是一个p标签</p>
</div>



ReactDOM.render(mydiv,document.getElementById("app"));