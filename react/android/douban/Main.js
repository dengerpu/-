import React from 'react';
import TabNavigator from 'react-native-tab-navigator'

//导入字体图标相关的组件
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './Components/tabbars/Home.js'
import Search from './Components/tabbars/Search.js'
import Me from './Components/tabbars/Me.js'
import Car from './Components/tabbars/Car.js'        

import {
  View ,
  StyleSheet,
} from 'react-native';



export default class Main extends React.Component{
    constructor(){
      super()
      this.state = {
        selectedTab: 'home' ,
      }
    }
    render(){
      return ( <View style={styles.box}>
          <TabNavigator>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'home'}
              title="Home"
              renderIcon={() => <Icon name="home" size={25} color="gray" />}
              renderSelectedIcon={() => <Icon name="home" size={25} color="#0079ff" />}
              onPress={() => this.setState({ selectedTab: 'home' })}>
              <Home></Home>
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'search'}
              title="search"
              renderIcon={() => <Icon name="search" size={25} color="gray" />}
              renderSelectedIcon={() => <Icon name="search" size={25} color="#0079ff" />}
              // renderBadge={() => <CustomBadgeView />}
              onPress={() => this.setState({ selectedTab: 'search' })}>
             <Search></Search>
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'car'}
              title="car"
              badgeText="0"//可以表示当前购物车中商品的数量
              renderIcon={() => <Icon name="shopping-cart" size={25} color="gray" />}
              renderSelectedIcon={() => <Icon name="shopping-cart" size={25} color="#0079ff" />}
              // renderBadge={() => <CustomBadgeView />}
              onPress={() => this.setState({ selectedTab: 'car' })}>
              <Car></Car>
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'me'}
              title="me"
              renderIcon={() => <Icon name="user" size={25} color="gray" />}
              renderSelectedIcon={() => <Icon name="user-o" size={25} color="#0079ff" />}
              // renderBadge={() => <CustomBadgeView />}
              onPress={() => this.setState({ selectedTab: 'me' })}>
              <Me></Me>
            </TabNavigator.Item>
          </TabNavigator>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  box:{
    flex:1
  }
})