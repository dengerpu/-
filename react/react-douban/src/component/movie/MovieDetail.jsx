import React, { Component } from 'react'
import fetchJSONP from 'fetch-jsonp'

import { Button,Spin, Alert} from 'antd';
export default class MovieDetail extends Component {
    constructor(){
        super()
        this.state={
            info:[],
            isLoading:true
        }
    }
    componentWillMount(){
        fetchJSONP(`http://api.douban.com/v2/movie/subject/${this.props.match.params.id}?apikey=0df993c66c0c636e29ecbb5344252a4a`)
        .then(response=>response.json())
        .then(data=>{
            this.setState({
                info:data,
                isLoading:false
            })
        })
    }
    render() {
        return (
            <div>
                {this.getDetail()}
            </div>
        )
    }
    goBack=()=>{
        this.props.history.go(-1)
    }
    getDetail(){
        if(this.state.isLoading){
            return <Spin tip="Loading...">
            <Alert
              message="正在加载中"
              description="精彩内容,马上呈现..."
              type="info"
            />
          </Spin>
        }else{
            return <div>
            <Button type="primary" onClick={this.goBack}>
            返回电影列表页面
            </Button>
           <div style={{textAlign:"center"}}>
                <h1>{this.state.info.title}</h1>
                <img src={this.state.info.images.large} alt=""/>
           </div> 
                <p style={{lineHeight:"20px",textIndent:"2em"}}>{this.state.info.summary}</p>
        </div>
        }
    }

}
