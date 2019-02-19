function fresh()
{
	//设置秒杀结束时间
	var endtime=new Date("2015/6/12,11:30:10");
	//获取当前时间
	var nowtime = new Date();
	//计算剩余秒杀时间，单位为秒
	var leftsecond=parseInt((endtime.getTime()-nowtime.getTime())/1000);
	h=parseInt(leftsecond/3600);//计算剩余小时
	m=parseInt((leftsecond/60)%60); //计算剩余分钟
	s=parseInt(leftsecond%60); //计算剩余秒
	if(h<10) h= "0"+h;
	if(m<10 && m>=0) m= "0"+m; else if(m<0) m="00";
	if(s<10 && s>=0) s= "0"+s; else if(s<0) s="00";   
	document.getElementById("hour").innerHTML=h;
	document.getElementById("munite").innerHTML=m;
	document.getElementById("second").innerHTML=s;
	//判断秒杀是否结束，结束则输出相应提示信息
	if(leftsecond<=0){
		document.getElementById("bot-box").style.display="block";
		document.getElementById("bot-box").style.background="url(images/flash_end.png) no-repeat";
		document.getElementById("bot-box").innerHTML="秒杀已结束";
		clearInterval(sh);
	}	
}
//设计倒计时
var sh=setInterval(fresh,1000);
