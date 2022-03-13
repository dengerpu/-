function jsonp(options){
		//动态创建script标签
		var script = document.createElement('script');
		//拼接字符串变量
		var params ='';
		for(var attr in options.data){
			params += '&'+attr+'='+options.data[attr]
		}
		//随机生成一个函数名称,并将生成的小数转化为字符串去掉点  
		var fnName = 'myJsonp' + Math.random().toString().replace('.','');
		//让这个函数称为全局函数
		window[fnName] = options.success;
		//给script标签添加src属性
		script.src = options.url +'?callback='+fnName + params;
		//将script标签追加到页面中
		document.body.appendChild(script);
		//为script标签添加onload事件
		script.onload = function(){
			document.body.removeChild(script);
		}
	}