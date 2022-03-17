import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native'

import Swiper from 'react-native-swiper'
import {Actions} from 'react-native-router-flux'

export default class Home extends React.Component {
    render() {
        return (<View>
            <View style={{height:220}} >
                <Swiper style={styles.wrapper} autoplay={true} loop={true} showsButtons={true}>
                    <View style={styles.slide1}>
                        <Image style={styles.image} source={{uri:'http://www.itcast.cn/images/slidead/BEIJING/2017410109413000.jpg'}}></Image>
                    </View>
                    <View style={styles.slide2}>
                        <Image style={styles.image} source={{uri:'http://www.itcast.cn/images/slidead/BEIJING/2017440109442800.jpg'}}></Image>
                    </View>
                    <View style={styles.slide3}>
                        <Image style={styles.image} source={{uri:'http://www.itcast.cn/images/slidead/BEIJING/2017441409442800.jpg'}}></Image>
                    </View>
                </Swiper>  
            </View> 
            
            {/* 导航区域 */}
            <View style={styles.nav}>
                <View style={styles.navitem}>
                    <Image source={require('../../images/menu1.png')} style={{width:60,height:60}}></Image>
                    <Text>新闻资讯</Text>
                </View>
                <View style={styles.navitem}>
                    <Image source={require('../../images/menu2.png')} style={{width:60,height:60}}></Image>
                    <Text>图片分享</Text>
                </View>
                <View style={styles.navitem}>
                    <Image source={require('../../images/menu3.png')} style={{width:60,height:60}}></Image>
                    <Text>商品购买</Text>
                </View>
                <View style={styles.navitem}>
                    <Image source={require('../../images/menu4.png')} style={{width:60,height:60}}></Image>
                    <Text>留言反馈</Text>
                </View>
                <TouchableHighlight underlayColor="white" onPress={this.goMovielist} style={styles.navitem}>
                    <View>
                        <Image source={require('../../images/menu5.png')} style={{width:60,height:60}}></Image>
                        <Text>热门电影</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.navitem}>
                    <Image source={require('../../images/menu6.png')} style={{width:60,height:60}}></Image>
                    <Text>联系我们</Text>
                </View>
            </View>
        </View>
        )
    }
    goMovielist=()=>{
        Actions.movielist()
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    },
    image:{
        width:'100%',
        height:'100%'
    },
    nav:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    navitem:{
        width:'33.33%',
        marginTop:15,
        alignItems:'center'
    }
  })
  