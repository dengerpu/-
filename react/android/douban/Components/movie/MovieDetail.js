import React from 'react'
import { 
    View,
    ActivityIndicator,
    Image,
    Text,
    ScrollView
 } from 'react-native'

export default class MovieDetail extends React.Component {
    constructor(){
        super()
        this.state = {
            idLoading:true,
            info:{}
        }
    }
    componentWillMount(){
        fetch(`http://api.douban.com/v2/movie/subject/${this.props.id}?apikey=0df993c66c0c636e29ecbb5344252a4a`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                info:data,
                isLoading:false
            })
        })
    }
    render() {
        return (<View>
            {this.renderList()}
        </View>
        )
    }
    renderList=()=>{
        if (this.state.isLoading){
            return <ActivityIndicator size="large"></ActivityIndicator>
        } else {
            return <ScrollView>
                <View style={{alignItems:'center',padding:5}}>
                    <Text style={{fontSize:25,fontWeight:'700',marginBottom:20,marginTop:20}}>{this.state.info.title}</Text>
                    <Image source={{uri:this.state.info.images ? this.state.info.images.large : ''}} style={{width:200,height:280}}></Image>
                    {/* <Text>{this.state.info.images.small}</Text> */}
                    <Text style={{lineHeight:30,marginTop:20,textIndent:'2em'}}>{'    ' + this.state.info.summary}</Text>
                </View>
            </ScrollView>
        }
    }
}
