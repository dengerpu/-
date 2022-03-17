import React from 'react'
import comment from '../../css/comment.scss'


console.log(comment)
export default class ComList extends React.Component{
    constructor(){
        super()
        this.state = {
            comlist:[
                {user:'111',comment:'111'},
                {user:'222',comment:'222'},
                {user:'333',comment:'333'}
            ]
        }
    }
    render(){
        return <div>
            <h1 className={comment.title}>评论详情</h1>
            <hr></hr>
            {this.state.comlist.map((item,i)=>{
                return <ComItem {...item} key={i}></ComItem>
            })}   
        </div>
    }
}

class ComItem extends React.Component{
    render(){
        return <div className={comment.box}>
            <h3 className="title">评论人：{this.props.user}</h3>
            <h5>评论内容：{this.props.comment}</h5>
        </div>
    }
}