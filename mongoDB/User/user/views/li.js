2018-11-18 回答
方法1：循环替换，因为js里的replace默认只会替换一个

var a = 'abc;def;hij;';
while(a.indexof(';') >= 0)
a = a.replace(';',',');
alert(a);

方法2用正则替换：

var a = 'abc;def;hij;';
a = a.replace(/;/g,',');
alert(a);