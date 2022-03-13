function animate(obj,target,callback){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var step=(target-obj.offsetLeft)/10;
		step=step>0?Math.ceil(step):Math.floor(step);
		if(obj.offsetLeft==target){
			clearInterval(obj.timer);
			if(callback){   //如果存在，定时器结束后调用回调函数
				callback();
			}
		}else{
			obj.style.left=obj.offsetLeft+step+'px';
		}
	},15)
}