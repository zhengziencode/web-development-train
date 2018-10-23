/**
 * Created by ZZE-LapTop on 2018/5/22.
 */
window.onload = function(){
//获取本地的cookie
    var set_one=document.getElementById("set_opt");
    var set_sub=document.getElementById("set_opt_sub");
    if(getCookie("username")==null || getCookie("password")==null){
        set_one.innerHTML="登陆";
        set_sub.innerHTML="注册";
    }
    else{
        set_one.innerHTML="个人中心";
        set_sub.innerHTML="注销";
    }
}

function opt_one(){
    if(getCookie("username")==null || getCookie("password")==null){//表示登录
        window.location.href="login.html";
    }
    else{//表示进入个人中心
        window.location.href="individual_space.html";
    }
}

function sub_opt(){
    if (getCookie("username")==null || getCookie("password")==null){//表示注册
        window.location.href="register.html";
    }
    else{//表示注销
        var opt=confirm("确认注销吗？");
        if(opt){
            //注销
            delCookie("username");
            delCookie("password");
            window.location.href="index.html";
        }
    }

}

function initWindows(){
    var windowH=window.outerHeight;
    var windowsW=window.outerWidth;
    var header = document.getElementById("header");
    header.width=windowsW;
    header.height=windowH;
    var banner=document.getElementById("banner");
}
function personal(){
    var name=getCookie("username");
    var pw=getCookie("password");
    if(name==null || pw==null){
        var opt = confirm("您未登录,是否先登录?");
        if(opt){
            window.location.href="login.html";
        }
    }
	else
		window.location.href="individual_space.html";
}

function leaveMsg(){
    window.location.href="leave_words.html";
}
