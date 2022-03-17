import React, { Component } from 'react'
import ReactTypes from 'prop-types'

export default class Context extends Component {
    constructor(){
        super()
        this.state={
            color:'red'
        }
    }
    render() {
        return (
            <div>
                <Context1></Context1>
            </div>
        )
    }
    getChildContext(){
        return{
            color:this.state.color
        }
    }
    static childContextTypes={
        color:ReactTypes.string
    }
}
class Context1 extends Component{
    render() {
        return (
            <div>
                <Context2></Context2>
            </div>
        )
    }
}
class Context2 extends Component{
   
    render() {
         console.log(this.context)
        return (
            <div style={{color:this.context.color}}>
                孙子组件{this.context.color}
            </div>
        )
    }
    static contextTypes={
        color:ReactTypes.string
    }
}