//工具函数 - 通用的辅助函数，如日期格式化

function startTime() //显示时间
{
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	m=checkTime(m);
	s=checkTime(s);
	document.getElementById('showTime').innerHTML=h+":"+m+":"+s;
	t=setTimeout(function(){startTime()},500);
}

function checkTime(i) //在数字前补0
{
	if (i<10){
		i="0" + i;
	}
	return i;
}

function timeDescribe() //显示时间描述
{
	var today=new Date();
    var h=today.getHours();
    if(h<5)document.getElementById('timeDescribe').innerHTML="深夜";
    else if(h<10)document.getElementById('timeDescribe').innerHTML="早上";
    else if(h<12)document.getElementById('timeDescribe').innerHTML="上午";
    else if(h<14)document.getElementById('timeDescribe').innerHTML="中午";
    else if(h<18)document.getElementById('timeDescribe').innerHTML="下午";
    else document.getElementById('timeDescribe').innerHTML="晚上";
	t=setTimeout(function(){timeDescribe()},5000);
}