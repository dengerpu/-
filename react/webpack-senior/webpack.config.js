const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new htmlWebpackPlugin({
    template:'./src/index.html',
    filename:'index.html'
})
module.exports={
    mode:'production',
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[htmlPlugin],
   module:{
    rules:[
        {test:/\.css$/,use:['style-loader','css-loader','postcss-loader']},
        {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
        {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
        {test:/\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,use:'url-loader?limit=4000'},
        {test:/\.js|jsx$/,use:'babel-loader',exclude:/node_modules/}
    ]
   }
}