/**
 * Created by ZZE-LapTop on 2018/5/31.
 */
<!--jquery-1.12.4.min.js-->
$(document).ready(function(e) {
    /*var username=getCookie("username");
     if(!username){
     alert("Please login first!");
     window.location.href="login.html";
     }*/
    var username="temp";
    $("#show_name").html("Hello " + username + ", Welcome Back!");
    var tag=document.getElementById("show_name");
    tag.style.background="gray";
    tag.style.height="60px";
    tag.style.lineHeight="60px";
    tag.style.textAlign="center";
    tag.style.fontSize="40px";
    tag.style.width="1800px";

    $("#tips").html("<h2>最近更新</h2><p>1.登录系统更新</p><p>2.个人空间更新</p><p>点击关闭窗口.</p>");
    $("#tips h2,p").css("background","purple");
    $("#tips").css("position","absolute");
    $("#tips").css("width","500px");
    $("#tips").css("padding-left","650px");
    $("#tips h2,p").css("text-align","center");
    $("#tips").click(function(){
        $(this).hide("slow");
    });
});

function  contactUs(){
    alert("Please contact at tel.+86-15179342194.")
}


