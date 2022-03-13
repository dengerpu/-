// 面向对象版tab切换
window.onload=function(){

var that;

class Tab{
	constructor(id){
		that=this;
		this.top=document.querySelector(id);
		this.ul=this.top.querySelector('ul');
		this.span=this.top.getElementsByTagName('span');
		this.add=document.querySelector('.jia');
		this.li=this.ul.getElementsByTagName('li');
		this.remove=document.getElementsByClassName('icon-guanbi');//关闭按钮
		this.con=document.querySelector('.con');
		this.section=this.con.getElementsByTagName('section');
		this.init();
	}
	init(){
		this.add.onclick=this.addTab;
		for(let i=0;i<this.li.length;i++){
			this.li[i].index=i;
			this.li[i].onclick=this.toggleTab;
			that.remove[i].onclick=this.removeTab;
			that.section[i].ondblclick=this.editTab;
			this.span[i].ondblclick=this.editTab;
		}
	}

	//清楚所有li和section的类
	clearClass() {
		for(let i=0;i<this.li.length;i++){
			this.li[i].className="";
			this.section[i].className="";
		}
	}

	// 1.切换功能
	toggleTab(){
		that.clearClass();
		this.className="current";
		that.section[this.index].className="cur";
	}

	// 2.添加功能
	addTab(){
		that.clearClass();
		var random=Math.random();
		var lili='<li class="current"><span>新选项卡</span><i class="iconfont icon-guanbi"></i></li>'
		 var sections = '<section class="cur">测试 ' + random + '</section>';
		that.ul.insertAdjacentHTML('beforeend',lili);
		that.con.insertAdjacentHTML('beforeend',sections);
		that.init();
	}

	// 3.删除功能
	removeTab(e){
		e.stopPropagation();//阻止事件冒泡。防止触发li点击事件
		var index=this.parentNode.index;
		that.li[index].remove();  //remove()方法可以删除元素自身
		that.section[index].remove();
		that.init();
		// 当我们删除的不是选中状态的li 的时候,原来的选中状态li保持不变
		if (document.getElementsByClassName('current')[0]) {return;}
		// 当我们删除了选中状态的这个li 的时候, 让它的前一个li 处于选定状态
		index--;
		//手动点击事件
		that.li[index]&&that.li[index].click();
	}

	// 4.修改功能
	
	editTab(){
		var str=this.innerHTML;//由于span里面只有文字，获取到的就是文字
		 // 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
		this.innerHTML='<input type="text">'
		var input=this.children[0];
		input.value=str;
		input.select();//输入框里面的文字处于选中状态
		//离开文本框就把文本框里的值给span
		input.onblur=function(){
			this.parentNode.innerHTML=this.value;
		}
		        // 按下回车也可以把文本框里面的值给span
        input.onkeyup = function(e) {
            if (e.keyCode === 13) {
                // 手动调用表单失去焦点事件  不需要鼠标离开操作
                this.blur();
            }
		}
	}
}

new Tab('.top');






}

