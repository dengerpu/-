import React from 'react'

import {
    View,
    Text,
    ActivityIndicator,
    FlatList,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native'
import {Actions} from 'react-native-router-flux'

export default class MovieList extends React.Component {
    constructor(){
        super()
        this.state = {
            isLoading: true,
            movies:[],
            nowPage:1,
            pageSize:4,
            totalPage:0  //总页数
        }
    }
    componentWillMount(){
        this.getMovieList()
    }
    render() {
        return (
            <View>
                {this.renderList()}
            </View>
        )
    }
    getMovieList=()=>{
        // const start = (this.state.nowPage - 1) * (this.state.nowPage);
        // const url = `https://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${start}&count=${this.state.pageSize}`
        // fetch(url).
        // then(res=>res.json())
        // .then(data=>{
        //     this.setState({
        //         isLoading:false,
        //         movies:this.movies.concat(data.subjects),
        //         totalPage: Math.ceil(data.total ? data.total : 1 / this.state.pageSize)
        //     })
        // })
        setTimeout(()=>{
            this.setState({
                isLoading:false,
                movies:require('./test_list.json').subjects,
                totalPage: 1
            })
        },1000)
    }
    renderList=()=>{
        if (this.state.isLoading){
            return <ActivityIndicator></ActivityIndicator>
        } else {
         return <FlatList data={this.state.movies} keyExtractor={(item,i)=>i}
        renderItem={({item})=>this.MovieDetail(item)} ItemSeparatorComponent={this.renderSeparator}
        onEndReachedThreshold={0.5} onEndReached={this.getMoreList}/>
        }
    }
    MovieDetail=(item)=>{
        return <TouchableHighlight underlayColor="white" onPress={()=>{this.goDetail(item)}}>
            <View style={{flexDirection:'row',margin:10}}>
                <Image source={{uri:item.images ? item.images.small : ''}} style={{width:100,height:140,padding:10}}></Image>
                <View style={styles.right}>
                    <View style={styles.rightItem}><Text style={styles.title}>电影名称：</Text><Text>{item.title}</Text></View>
                    <View style={styles.rightItem}><Text style={styles.title}>电影类型：</Text><Text>{item.genres.join(',')}</Text></View>
                    <View style={styles.rightItem}><Text style={styles.title}>制作年份：</Text><Text>{item.year}</Text></View>
                    <View style={styles.rightItem}><Text style={styles.title}>豆瓣评分：</Text><Text>{item.rating.average}</Text></View>
                </View>
            </View>
        </TouchableHighlight>
    }
    renderSeparator=()=>{
        return <View style={{borderTopColor:'#ccc',borderTopWidth:1,marginLeft:10,marginRight:10}}></View>
    }
    goDetail=(item)=>{
        // console.warn(item)
        Actions.moviedetail({id : item.id})
    }
    getMoreList=()=>{
        if (this.state.nowPage + 1 > this.state.totalPage){
            return
        } else {
            this.setState({
                nowPage:this.state.nowPage++
            },function(){
                this.getMovieList()
            })
        }
    }
}
const styles = StyleSheet.create({
    right:{
        marginLeft:10,
        flexDirection:'column',
        justifyContent:'space-around'
    },
    title:{
        fontWeight:'700'
    },
    rightItem:{
        flexWrap:'nowrap',
        flexDirection:'row',
    }
})
