import React, { Component } from 'react'

export default class Bind extends Component {
    constructor(){
        super()
        this.state={
            msg:'这是默认的内容'
        }
        this.changeMsg2 = this.changeMsg2.bind(this,"2222")
    }
    render() {
        return (
            <div>
                <button onClick={this.changeMsg1.bind(this,"1111")}>第一种方式</button>
                <br/>{this.state.msg}
                <hr/>
                <button onClick={this.changeMsg2}>第2种方式</button>
                <br/>{this.state.msg}
                <hr/>
                <input type="text" ref="txt" value={this.state.msg} onChange={this.changeInput}/>
            </div>
        )
    }
    changeMsg1(arg1){
      this.setState({
          msg:this.state.msg+arg1
      })
    }
    changeMsg2(arg1){
        this.setState({
            msg:this.state.msg+arg1
        })
    }
    // changeInput=(e)=>{
    //     // console.log(e.target.value);
    //     this.setState({
    //         msg:e.target.value
    //     })
    // }
    changeInput=()=>{
        // console.log(e.target.value);
        this.setState({
            msg:this.refs.txt.value
        })
    }
}
