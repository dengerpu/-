import React from 'react'

// 循环的两种方案
var arr=[0,1,2,3]
// var name =[]

// arr.forEach(v=>{
//     const p = <p key={v}>第{v}个</p>
//     name.push(p)
// })
const mydiv = <div>
  <p>我是一个p通过jsx语法</p>
  {/* {name} */}
  {arr.map((v,i)=>{
    return <h5 key={i}>第{v}个</h5>
  })}
</div>

// 把创建的组件暴露出去
module.exports = mydiv