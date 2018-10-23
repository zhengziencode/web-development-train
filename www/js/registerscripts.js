
function setTime(){
	function set(){
		var dateObj=new Date;
		var dateStr=dateObj.toLocaleTimeString();
		var tagObj=document.getElementById("Time");
		tagObj.innerHTML=dateStr;
	}
	setInterval(set,1000);
}
window.onload=setTime();

function CheckRepeatPW(){
	var pwObj=document.getElementById("pw");

	var pw_rpt=document.getElementById("pw_rpt");
	if(pwObj.value==pw_rpt.value && pwObj.value!=""){
		var tag=document.getElementById("correctLogo");
		tag.style.visibility="visible";
		return true;
	}
	else{
		var tag=document.getElementById("correctLogo");
		tag.style.visibility="hidden";
		return false;
	}
}
function Register(){
	var un=document.getElementById("un");
	var pw=document.getElementById("pw");
	var email=document.getElementById("email");
	if(CheckRepeatPW() && un.value!="" && pw.value!="" && email.value!=""){
		var btn=document.getElementById("btn");
		btn.value="请稍后，提交中..."
		btn.style.backgroundColor="gray";


		var xmlHttp;
		if(window.XMLHttpRequest){
			xmlHttp=new XMLHttpRequest();
		}
		else{
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlHttp.onreadystatechange=function(){
			if (xmlHttp.readyState==4 && xmlHttp.status==200){
				var response=xmlHttp.responseText;
				if(response=="ok_zzemojo"){
					var choice = confirm("注册成功，是否现在登陆?");
					if(choice)
						window.location.href="./login.html";
					else
						window.location.href="./index.html"
				}
				else{
					alert(response);
				}
			}
		}
		var sendText="username="+un.value+"&password="+pw.value+"&email="+email.value;
		xmlHttp.open("POST","register.php",true);
		xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");//有数据的话必须加这个表单头
		xmlHttp.send(sendText);
	}
	else{
		alert("Error");
	}
}
