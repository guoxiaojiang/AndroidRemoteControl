  const exec = require('child_process').exec;
  function adbinputkey(value) {
     let cmd = 'adb shell input keyevent '+value;
     exec(cmd, function (err, stdout, stderr){
       document.getElementById("result").value=err?("error."+stderr):("keyCode:"+value+ ", OK!"+stdout);
     });
  }
  function adbinputlongkey(value) {
     let cmd = 'adb shell input keyevent --longpress '+value;
     exec(cmd, function (err, stdout, stderr){
       document.getElementById("result").value=err?("error."+stderr):("keyCode:"+value+ ", OK!"+stdout);
     });
  }
  function chjhome() {
  	let cmd = 'adb shell am start -n com.chehejia.m01.launcher/.presentation.home.MainActivity';
  	exec(cmd, function (err, stdout, stderr){
       document.getElementById("result").value=err?("error."+stderr):("launch launcher success.");
     });
  }
    function settings() {
  	let cmd = 'adb shell am start -n com.chehejia.car.carsettings/.presentation.SettingsActivity';
  	exec(cmd, function (err, stdout, stderr){
       document.getElementById("result").value=err?("error."+stderr):("进入车辆设置");
     });
  }


  window.onload=function ()
{
	var aLi=document.getElementsByTagName('li');
	var i=0;
	
	for(i=0;i<aLi.length;i++)
	{
		aLi[i].onmouseover=function ()
		{
			this.className='active';
		};
		
		aLi[i].onmouseout=function ()
		{
			this.className='';
		};
	}
};