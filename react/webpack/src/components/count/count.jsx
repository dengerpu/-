import React, { Component } from 'react'
import ReactTypes from 'prop-types'

export default class Count extends Component {
    constructor(props){
        super()
        this.state={
            count:props.initCount
        }
    }
    static defaultProps={ //使用静态的defaultProps属性，来设置组件的默认值
        initCount:0
    }
    static propTypes={
        initCount:ReactTypes.number
    }
    render() {
        return (
            <div>
                <h1>Count计数器</h1>
                <input type="button" value="点击加1" onClick={this.add}/>
                <hr/>
                <h2>当前数量：{this.state.count}</h2>
            </div>
        )
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("旧的数据"+this.state.count+"新的数据"+nextState.count)
        return true
    }
    add=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
}
