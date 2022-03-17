import React from 'react'

//组件的第一种形式,首字母必须大写
export default function City(props){
    return <div>
      <h1>这是通过function创建的组件</h1>
  <h3>父组件传递过来的值   name--{props.name} age--{props.age}</h3>
    </div>
  }