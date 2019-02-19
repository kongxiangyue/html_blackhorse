//加载事件
window.onload = function(){
	//获取所有tab-head-div
	var head_divs = document.getElementById("tab-head").getElementsByTagName("div");
	//保存当前焦点元素的索引
	var current_index=0;
	//启动定时器
	var timer = window.setInterval(autoChange, 5000);
	
	//遍历元素
	for(var i=0;i<head_divs.length;i++){
		//添加鼠标滑过事件
		head_divs[i].onmouseover = function(){
			clearInterval(timer);
			if(i != current_index){
				head_divs[current_index].style.backgroundColor = '';
				head_divs[current_index].style.borderBottom = '';
			}
			//获取所有tab-body-ul
			var body_uls = document.getElementById("tab-body").getElementsByTagName("ul");
			//遍历元素
			for(var i=0;i<body_uls.length;i++){
				//将所有元素设为隐藏
				body_uls[i].className = body_uls[i].className.replace(" current","");
				head_divs[i].className = head_divs[i].className.replace(" current","");
				//将当前索引对应的元素设为显示
				if(head_divs[i] == this){
					this.className += " current";
					body_uls[i].className += " current";
				}
			}
		}
		//的鼠标移出事件
		head_divs[i].onmouseout = function(){
			//启动定时器，恢复自动切换
			timer = setInterval(autoChange,5000);
		}
	}
	//定时器周期函数-Tab栏自动切换
	function autoChange(){
		//自增索引
		++current_index;
		//当索引自增达到上限时，索引归0
		if (current_index == head_divs.length) {
			current_index=0;
		}
		//当前的背景颜色和边框颜色
		for(var i=0;i<head_divs.length;i++){
			if(i == current_index){
				head_divs[i].style.backgroundColor = '#fff';
				head_divs[i].style.borderBottom = '1px solid #fff';
			}else{
				head_divs[i].style.backgroundColor = '';
				head_divs[i].style.borderBottom = '';
			}	
		}
		//获取所有tab-body-ul
		var body_uls = document.getElementById("tab-body").getElementsByTagName("ul");
		//遍历元素
		for(var i=0;i<body_uls.length;i++){
			//将所有元素设为隐藏
			body_uls[i].className = body_uls[i].className.replace(" current","");
			head_divs[i].className = head_divs[i].className.replace(" current","");
			//将当前索引对应的元素设为显示
			if(head_divs[i] == head_divs[current_index]){
				this.className += " current";
				body_uls[i].className += " current";
			}
		}
		
	}
}

