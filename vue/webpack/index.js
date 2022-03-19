//默认导入语法  import 接收名字（任意） from '文件路径'
import m1 from './m1.js';
//按需导入语法 import {变量名字，和导出的一致，可以使用as起一个别名} from 
//起别名后，原来的名字就不能用了
import {s1,s2 as ss,s} from './m1.js'
// console.log('ok');
// console.log(m1);
// console.log(s1,ss,s);

//直接导入并执行模块代码
import './m1.js'