/**
 * Created by ZZE-LapTop on 2018/5/24.
 */
//全局变量
var audios="NULL";
function setTime(tagid){
    function time(){
        var date=new Date;
        var strDate=date.toLocaleTimeString();
        var tagObj=document.getElementById(tagid);
        tagObj.innerHTML=strDate;
    }
    setInterval(time,1000);
}
function loginIdentify(){
    var username=document.getElementById("un");
    var password=document.getElementById("pw");
    var date=new Date;
    var sendText = "username=" + username.value + "&password=" + password.value+"&time="+date.toLocaleTimeString();
    if (username.value == "" || password.value == "") {
        alert("请正确输入");
    }
    else {
        var btn = document.getElementById("submitBtn");
        btn.value = "登陆中...";
        var xmlrequesthttp;
        if (window.XMLHttpRequest) {
            xmlrequesthttp = new XMLHttpRequest();
        }
        else {
            xmlrequesthttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlrequesthttp.onreadystatechange = function () {
            if(xmlrequesthttp.readyState==4 && xmlrequesthttp.status==200){
                if(xmlrequesthttp.responseText=="ok_zzemojo"){
                    //跳转页面
                    window.location.href="./index.html";
                    setCookie("username",username.value,30);
                    setCookie("password",password.value,30);
                }
                else{
                    if (xmlrequesthttp.responseText=="pw error"){
                        alert("账号或者密码错误!");
                    }
                    else {
                        alert("登录失败!");
                    }
                    btn.value = "重新登陆";
                }
            }
        }
               xmlrequesthttp.open("POST", "login.php", true);
               xmlrequesthttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");//有数据的话必须加这个表单头
               xmlrequesthttp.send(sendText);
       }
}

function  contactUs(){
    alert("Please contact at tel.+86-15179342194.")
}
function getRandom(range){
    return (Math.floor(Math.random()*range+1));
}
function playSong(){
    var random=parseInt(getRandom(6));
    var songs=new Array();
    songs[0]="";//保留，不存音乐链接
    songs[1]="bg.mp3";
    songs[3]="bg.mp3";
    songs[4]="bg.mp3";
    songs[5]="bg.mp3";
    songs[6]="bg.mp3";
 //   var content="<audio id='music' autoplay='autoplay' src='"+songs[random]+"' type='audio/mp3'></audio>";
  //  var audio=document.getElementById("music");

    audios=document.getElementById("audio");
    audios.src=songs[random];
    if(audios.paused) {
        alert(audios.src);
        audios.load();
        audios.play();
    }
    if (audios.paused){
        alert("error");
    }
}
function lastSong(){
    playSong();
}
function control(){
    if(audios=="NULL"){
        playSong();
    }
    else{

    }
}
function nextSong(){
    playSong();
}
