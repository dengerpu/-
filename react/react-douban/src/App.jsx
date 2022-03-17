import React, { Component } from 'react'

//导入路由需要的组件
import {HashRouter,Route,Link} from 'react-router-dom'

//导入ANT design需要的组件
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

//导入首页相关的样式
import style from './css/app.scss'

//导入路由组件
import HomeContainer from './component/home/HomeContainer.jsx'
import AboutContainer from './component/about/AboutContainer.jsx'
import MovieContainer from './component/movie/MovieContainer.jsx'

export default class App extends Component {
  constructor(props){
    super()
    this.state={

    }
  }
  componentWillMount(){
  }
  render() {
    return (
      <HashRouter>
        <Layout className="layout" style={{height:"100%"}}>
          {/* Header头部区域 */}
          <Header>
            <div className={style.logo} />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[window.location.hash.split("/")[1]]}>
              <Menu.Item key="home"><Link to="/home">首页</Link></Menu.Item>
              <Menu.Item key="movie"><Link to="/movie/in_theaters/1">电影</Link></Menu.Item>
              <Menu.Item key="about"><Link to="/about">关于</Link></Menu.Item>
            </Menu>
          </Header>
          <Content className={style.content}>
            <Route path="/home" component={HomeContainer}></Route>
            <Route path="/movie" component={MovieContainer}></Route>
            <Route path="/about" component={AboutContainer}></Route>
          </Content>
          {/* Footer底部区域 */}
          <Footer style={{ textAlign: 'center' }}>芝麻影院 ©2020 Created by 芝麻通</Footer>
        </Layout>
      </HashRouter>
    )
  }
}
