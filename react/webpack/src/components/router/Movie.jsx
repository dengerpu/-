import React, { Component } from 'react'

export default class Movie extends Component {
    render() {
        console.log(this.props.match.params)
        return (
            <div>
                Movie组件{this.props.match.params.type}
            </div>
        )
    }
}
