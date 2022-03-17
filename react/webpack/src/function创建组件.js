import React from 'react'
import ReactDOM from 'react-dom'

// //组件的第一种形式,首字母必须大写
// function City(props){
//   return <div>
//     <h1>这是通过function创建的组件</h1>
// <h3>父组件传递过来的值   name--{props.name} age--{props.age}</h3>
//   </div>
// }

import City from './components/fun.js'

var info = {
  name:'zhangsan',
  age:20
}

ReactDOM.render(<div>
  {/* <City name={info.name} age={info.age}></City> */}
  <City {...info}></City>
</div>, document.getElementById('app'))

