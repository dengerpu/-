function ajax(options){
			//如果有些参数没有传值，就是用默认值
			var defaults = {
				type:'get',
				url:'',
				data:{},
				header:{
					'Content-Type':'application/x-www-form-urlencoded'
				},
				success:function(){},
				error:function(){}
			}
		//使用传递过来的options对象集合覆盖原来的默认值
		Object.assign(defaults,options);

		//创建ajax实例对象
		var xhr = new XMLHttpRequest();
		// 接受传递过来的参数
		var params = '';
		for (var attr in defaults.data){
			params = params + attr + '=' + defaults.data[attr] + '&';
		}
		//去掉最后一个&符号
		params = params.substr(0,params.length-1);
		// 如果是get请求需要把请求参数放在url地址里面
		if(defaults.type == 'get'){
			defaults.url += '?' + params;
		}
		xhr.open(defaults.type,defaults.url);
		//如果是post请求需要把请求参数放在url地址里面
		if(defaults.type == 'post'){
			// post请求需要先设置请求数据类型
			var contentType = defaults.header['Content-Type'];
			 xhr.setRequestHeader('Content-Type',contentType);
			 //如果是json数据类型，就直接传递
			 if(contentType == 'application/json'){
			 	//将json对象转化为字符串
			 	xhr.send(JSON.stringify(defaults.data))
			 }else{
			 	xhr.send(params);
			 }
		}else{
			//get请求不需要传递参数
			xhr.send();
		}
		xhr.onload = function(){
			var responseText = xhr.responseText;
			//如果从服务器传递过来的json对象，就转化为json对象
			//获取从服务器传过来的数据方式
			var contentType = xhr.getResponseHeader('content-type');
			if(contentType.includes('application/json')){
				responseText = JSON.parse(responseText);
			}
			//状态码为200说明请求成功
			if(xhr.status == 200){
				defaults.success(responseText,xhr);
			}else{
				defaults.error(responseText,xhr);
			}
		}
		//当网络中断时
		xhr.onerror = function(){
			defaults.error(xhr);
		}

}