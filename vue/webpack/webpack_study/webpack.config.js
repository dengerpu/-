const path = require('path');
//导入html-webpack-plugin生成预览页面模板
const HtmlWebpackPlugin = require('html-webpack-plugin');
//导入vue组件加载器
const VueLoaderPlugin = require('vue-loader/lib/plugin');

//配置html-webpack-plugin生成预览页面
const htmlPlugin = new HtmlWebpackPlugin({
    template:'./src/index.html',//指定要用到的模板文件
    filename:"index.html" //指定生成的文件的名称，该文件存在于内存中，在目录中不显示
})
module.exports = {
    //编译模式
    mode: 'development', //mode用来指定构建模式，production生产
    //配置打包的入口和出口
    entry: path.join(__dirname,'./src/index.js'), //打包入口的文件路径
    output:{
        path:path.join(__dirname,'./dist'),  //输出文件的存放路径
        filename:'bundle.js'    //输出文件名称
    },
    //配置html-webpack-plugin生成预览页面
    plugins:[htmlPlugin,new VueLoaderPlugin()], //plugins数组是webpack打包期间会用到的一些插件列表
    module:{
        rules:[
            //test表示要匹配的文件类型，use 数组中指定的 loader 顺序是固定的
            //多个loader的调用顺序是从后往前
            {test:/\.css$/,use:['style-loader','css-loader','postcss-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,use:'url-loader?limit=16941'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,loader:'vue-loader'}
        ]
    }
    
}