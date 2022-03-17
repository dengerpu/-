import $ from 'jquery'
import './css/index.scss'

$(function(){
    $('li:odd').css('backgroundColor','pink');
    $('li:even').css('backgroundColor','skyblue');
})

class person{
    static info = {
        name:'zhangsan'
    }
}

console.log(person.info)