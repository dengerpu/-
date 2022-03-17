import React from 'react'
// 第1步：
import {View, Button, Image} from 'react-native'
import ImagePicker from 'react-native-image-picker'

var photoOptions = {
    //底部弹出框选项
    title: '请选择',
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '选择相册',
    quality: 0.75,   //照片质量
    allowsEditing: true,
    noData: false,    //是否上传时间
    storageOptions: {
      skipBackup: true,  //是否上传到苹果手机上传到icloud
      path: 'images'
    }
  }
export default class Me extends React.Component {
    // 第2步：
    constructor(props) {
        super(props);
            this.state = {
            imgURL: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587574562936&di=e7b5d7e6e45c7cfbbcac52e70baea5d2&imgtype=0&src=http%3A%2F%2Fpics6.baidu.com%2Ffeed%2F8b13632762d0f703e0bd4b2c4ca3dc3b2797c597.jpeg%3Ftoken%3D76f25641d5a1a13844c6988d7707592f'
            }
        }
        // 第3步：
    render() {
        return (
            <View style={{alignItems:'center',marginTop:70}}>
                <Image source={{ uri: this.state.imgURL }} style={{ width: 200, height: 200 ,borderRadius:100}}></Image>
                <Button title="拍照" onPress={this.cameraAction}></Button> 
            </View>
        )
    }
    // 第4步：
cameraAction = () => {
    ImagePicker.showImagePicker(photoOptions, (response) => {
      console.log('response' + response);
      if (response.didCancel) {
        return
      }
      this.setState({
        imgURL: response.uri
      });
    })
}
}