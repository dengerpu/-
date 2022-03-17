import React from 'react'
export default class Person extends React.Component{
    constructor(props){
      super()
      console.log(props)
      this.state={
        msg:'大家好，我是class创建的组件'
      }
    }
    render(){
      return <div>
         <h1 className={this.props.name}>class组件</h1>
         {this.state.msg}
         <button onClick={()=>{this.change()}}>切换msg</button>
      </div>
     
    }
    change(){
      this.setState({
        msg:'123'
      })
    }
  }