import React, { Component } from 'react'

import { Rate } from 'antd';
import style from '../../css/movie_item.scss'

export default class MovieItem extends Component {
    render() {
        return (
            <div className={style.box} onClick={this.showDetail}>
                <img src={this.props.images.small.replace('img3.doubanio.com','img1.doubanio.com')} className={style.img}/>
                <h4>电影名称：{this.props.title}</h4>
                <h4>上映年份：{this.props.year}</h4>
                <h4>电影类型：{this.props.genres.join("，")}</h4>
                <Rate disabled defaultValue={this.props.rating.average/2} />
            </div>
        )
    }
    showDetail=()=>{
       this.props.history.push('/movie/detail/'+this.props.id)
    }
}
