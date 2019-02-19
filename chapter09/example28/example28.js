// JavaScript Document
//为网页设置键盘事件
window.onload=function(){
	document.body.onkeyup=function(evt){
		//小球步长
		var step = 20;
		//获取div和小球的元素节点
		var box = document.getElementById("box");
		var img = document.getElementById("img");
		//获取并转化小球相对于div左侧和顶部的距离
		var left = parseInt(img.style.left);
		var top = parseInt(img.style.top);
		//div宽度和高度
		var d_width = box.offsetWidth;
		var d_height = box.offsetHeight;
		//小球的宽度和高度
		var b_width = img.width;
		var b_height = img.height;
		//小球距div左侧和顶部最大的距离
		var x_max = d_width-b_width-step;
		var y_max = d_height-b_height-step;
		//创建事件对象：主流浏览器、IE浏览器
		var e = evt ? evt : window.event;
		//判断键盘的方向：左：37，上：38，右：39，下：40 
		if(e.keyCode == 37 && left >=step){
			img.style.left = left-step+"px";
		}
		if(e.keyCode == 38 && top >=step){
			img.style.top = top-step+"px";
		}
		if(e.keyCode == 39 && left<= x_max){
			img.style.left = left+step+"px"; 
		}
		if(e.keyCode == 40 && top <= y_max){
			img.style.top = top+step+"px";
		}
	}
}