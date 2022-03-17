import React from 'react'
import Main from './Main.js'

import {Router, Stack, Scene} from 'react-native-router-flux'
import MovieList from './Components/movie/MovieList.js'
import MovieDetail from './Components/movie/MovieDetail.js'

export default class App extends React.Component {
    render() {
        return (<Router>
            <Stack key="root">
                <Scene key="app" component={Main} hideNavBar={true} title=""/>
                <Scene key="movielist" component={MovieList} title="热映电影列表"/>
                <Scene key="moviedetail" component={ MovieDetail} title="详情页面"/>
            </Stack>
        </Router>
        )
    }
}