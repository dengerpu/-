import React, { Component } from 'react'

//导入UI组件
import { Spin, Alert } from 'antd';
import { Pagination } from 'antd';

import MovieItem from './MovieItem.jsx'

import fetchJSONP from 'fetch-jsonp';

export default class MovieList extends Component {
    constructor(props){
        super()
        this.state={
            movies:[], //电影列表
            nowPage:parseInt(props.match.params.page)||1,//当前页
            pageSize:12, //每页展示的数据条数
            total:0,   //总页数
            isLoading:true,  //是否加载完成
            movieType:props.match.params.type
        }
    }
    componentWillMount(){
    //#region 
        // fetch('http://vue.studyit.io/api/getlunbo')
        // .then(response=>{
        //     return response.json()
        // }).then(data=>{
        //     console.log(data)
        // })
    //#endregion
    this.loadMovieList()
    }
    componentWillReceiveProps(nextProps){
        //console.log(nextProps.match.params)
        this.setState({
            isLoading:true,  //切换tab栏要重新加载数据
            nowPage:parseInt(nextProps.match.params.page),
            movieType:nextProps.match.params.type
        })
        this.loadMovieList()
    }
    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }

    //请求电影列表
    loadMovieList=()=>{
        const start = this.state.pageSize * (this.state.nowPage - 1)
        const url = `https://api.douban.com/v2/movie/${this.state.movieType}?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${start}&count=${this.state.pageSize}`
        fetchJSONP(url)
        .then(response=>response.json())
        .then(data=>{
            this.setState({
                isLoading: false, // 将 loading 效果隐藏
                movies: data.subjects, // 为电影列表重新赋值
                total: data.total // 把总条数，保存到 state 上
              })
        })
        // const data = require('../test_data/'+this.state.movieType+'.json')
        // setTimeout(()=>{
        //     this.setState({
        //         isLoading: false, // 将 loading 效果隐藏
        //         movies: data.subjects, // 为电影列表重新赋值
        //         total: data.total // 把总条数，保存到 state 上
        //       })
        // },1000)
    }
    //改变当前页
    changePage=(page)=>{
        // window.location.href='/#/movie/'+this.state.movieType+'/'+page
        //使用react链式编程
        this.props.history.push('/movie/'+this.state.movieType+'/'+page)
    }
    //渲染电影列表
    renderList=()=>{
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
            <div style={{display:"flex",flexWrap:"wrap"}}>
                {this.state.movies.map(item=>{
                    return <MovieItem {...item} key={item.id} history={this.props.history}></MovieItem>
                })
            }</div>
                <Pagination defaultCurrent={this.state.nowPage} pageSize={this.state.pageSize} total={this.state.total} onChange={this.changePage}/>
            </div>
        }
    }
}
