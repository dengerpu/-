import React from 'react'
import ReactDOM from 'react-dom'

// const myh1 = React.createElement('h1',null,'我是h1');

// const mydiv = <div>
//   我是一个div
//   <p>我是一个p</p>
// </div>
import mydiv from  './components/mydiv.jsx'
ReactDOM.render(<h1 className="abc">
  <label htmlFor="1"></label>
  {mydiv}
  {/*代码注释*/}
  </h1>, document.getElementById('app'))

