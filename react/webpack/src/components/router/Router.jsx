import React, { Component } from 'react'

import {HashRouter,Route,Link} from 'react-router-dom'
import Home from './Home.jsx'
import Movie from './Movie.jsx'
import About from './Home.jsx'
export default class Router extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Link to="/home">首页</Link>&nbsp;&nbsp;
                    <Link to="/movie/type20/1">电影</Link>&nbsp;&nbsp;
                    <Link to="/about">关于</Link>
                    <hr/>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/movie/:type/:id" exact component={Movie}></Route>
                    <Route path="/about" component={About}></Route>
                </div>
            </HashRouter>
        )
    }
}
