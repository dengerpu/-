//导入jquery ,有兼容性问题
import $ from 'jquery';


//导入css文件
import './css/1.css'
//导入less文件
import './css/1.less'
//导入 scss文件
import './css/1.scss'


$(function(){
    $("li:odd").css('backgroundColor','red');
    $("li:even").css('backgroundColor','skyblue')
})
class Person{
    static info = 'bbbb'
}
console.log(Person.info);

//导入vue构造函数
import Vue from 'vue';
//导入vue单文件组件
import App from './components/App.vue'
var vm = new Vue({
    el:'#app',
    render: h=>h(App)
})

