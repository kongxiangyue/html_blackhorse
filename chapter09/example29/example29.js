// JavaScript Document
function checkEmpty(obj){
	if(!obj.value){
		//obj.nextSibling表示获取当前元素对象的下一个相邻元素对象
		//obj.nextSibling.style指的是这个相邻元素的样式
		//为obj.nextSibling.style.display赋值，就可以控制这个相邻元素是否显示
		obj.nextSibling.style.display = 'block';
	}else{
		obj.nextSibling.style.display = 'none';
	}
}
function checkPwd(obj){
	//document.getElementById可以通过传入的参数，获取指定的元素对象
	var pwd = document.getElementById('pwd').value;
	var pwdAgain = obj.value;
	if(pwd != pwdAgain){
		obj.nextSibling.style.display = 'block';
	}
	else{
		obj.nextSibling.style.display = 'none';
	}
}




