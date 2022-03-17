import React, { Component } from 'react'

//导入ant design组件
import { Layout, Menu } from 'antd';
const {  Content, Sider } = Layout;

//导入路由组件
import {Route,Link,Switch} from 'react-router-dom'
import MovieList from './MovieList.jsx'
import MovieDetail from './MovieDetail.jsx'

export default class MovieContainer extends Component {
    render() {
        return (
            <div style={{height:"100%"}}>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu mode="inline" defaultSelectedKeys={[window.location.hash.split("/")[2]]}
                        defaultOpenKeys={['in_theaters']} style={{height: '100%',  borderRight: 0 }}>
                            <Menu.Item key="in_theaters"><Link to="/movie/in_theaters/1">正在热映</Link></Menu.Item>
                            <Menu.Item key="coming_soon"><Link to="/movie/coming_soon/1">即将上映</Link></Menu.Item>
                            <Menu.Item key="top250"><Link to="/movie/top250/1">Top250</Link></Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout >
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 10,
                                margin: 0,
                                minHeight: 280,
                                backgroundColor: "#fff"
                            }}>
                                <Switch>
                                    <Route exact path="/movie/detail/:id" component={MovieDetail}></Route>
                                    <Route exact path="/movie/:type/:page" component={MovieList}></Route>
                                </Switch>
                            </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
