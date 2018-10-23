/**
 * Created by ZZE-LapTop on 2018/6/1.
 */

var left_words;//All left words.
var showCount=0;//The amount of have been showed.
var amount=0;//amount
var array;//save the content in array

var flag=0;//flag to prevent start to load more than once
function  contactUs(){
    alert("Please contact at tel.+86-15179342194.")
}
function add_content(content){
    var tag=document.getElementById("show_words");
    tag.innerHTML=content;
}
function getwords(){
    var tag=document.getElementsByClassName("display");
    var xml;
    if (window.XMLHttpRequest) {
        xml = new XMLHttpRequest();
    }
    else {
        xml = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xml.onreadystatechange=function(){
        if(xml.readyState=4 && xml.status==200){
            if(xml.responseText=="error" || xml.responseText==""){
                for(var i=0;i<tag.length;i++){
                    tag[i].innerHTML="no data";
                }
            }//failed
            else if(flag==0)
            {
                left_words=xml.responseText;
                array = left_words.split("\n");
                amount=array.length-1;
                nextPage();
                flag=1;
            }//succeed
        }//recived datas
    }

    xml.open("POST","leave_words.php",true);
    xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xml.send("method=show"+"&sid="+Math.random());
}
function nextPage(){
    if(showCount>=array.length &&array.length!=0){
        alert("已经是最后一页了!");
    }
    else if(array.length==0){
        alert("没有留言!");
    }
    else {
        var tag = document.getElementsByClassName("display");
        for (var i = 0; i < tag.length; i++) {
            tag[i].innerHTML = array[showCount];
            showCount++;
        }
        if (showCount > 4) {
            var tagPre = document.getElementById("pre");
            tagPre.style.visibility = "visible";
        }
    }
}
function previous(){
    showCount-=8;
    if(showCount<=0){
        var tagPre = document.getElementById("pre");
        tagPre.style.visibility = "hidden";
    }
    var tag = document.getElementsByClassName("display");
    for(var i=0; i < tag.length; i++){
        tag[i].innerHTML = array[showCount];
        showCount++;
    }
}
window.onload=function(){
    var width = window.innerWidth;
    var tag=document.getElementById("container");
    tag.style.width=width;

    var tag_input1=document.getElementById("name_input");
    tag_input1.style.color="gray";

    var tag_input2=document.getElementById("contact_input");
    tag_input2.style.color="gray";

    var tag_input3=document.getElementById("text_input");
    tag_input3.style.color="gray";

    getwords();
}
function focus_name(){
    var tag=document.getElementById("name_input");
    if(tag.value=="您的姓名"){
        tag.value="";
    }
}
function focus_email(){
    var tag=document.getElementById("contact_input");
    if(tag.value=="您的邮件"){
        tag.value="";
    }
}
function focus_text(){
    var tag=document.getElementById("text_input");
    if(tag.innerHTML=="请在此输入留言"){
        tag.innerHTML="";
    }
}
function blur_name(){
    var tag=document.getElementById("name_input");
    if(tag.value=="您的姓名"){
        tag.style.color="gray";
    }
    else if (tag.value==""){
        tag.value="您的姓名";
        tag.style.color="gray";
    }
    else{
        tag.style.color="black";
    }
}
function blur_email(){
    var tag=document.getElementById("contact_input");
    if(tag.value=="您的邮件"){
        tag.style.color="gray";
    }
    else if (tag.value==""){
        tag.value="您的邮件";
        tag.style.color="gray";
    }
    else{
        tag.style.color="black";
    }
}
function blur_text(){
    var tag=document.getElementById("text_input");
    if(tag.value=="请在此输入留言"){
        tag.style.color="gray";
    }
    else if (tag.value==""){
        tag.value="请在此输入留言";
        tag.style.color="gray";
    }
    else{
        tag.style.color="black";
    }
}
function hand_on(){
    var tag_input1=document.getElementById("name_input");
    var tag_input2=document.getElementById("contact_input");
    var tag_input3=document.getElementById("text_input");
    var msg="method=save&name="+tag_input1.value+"&email="+tag_input2.value+"&text="+tag_input3.value+"&sid="+Math.random();
    if(tag_input1.value=="您的姓名" || tag_input2.value=="您的邮件" ||tag_input3.value=="请在此输入留言"){
        alert("请正确输入");
    }
    else{
        var xmlrequesthttp;
        if (window.XMLHttpRequest) {
            xmlrequesthttp = new XMLHttpRequest();
        }
        else {
            xmlrequesthttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlrequesthttp.onreadystatechange=function() {
            if (xmlrequesthttp.status == 200 && xmlrequesthttp.readyState == 4) {
                if (xmlrequesthttp.responseText == "ok_zzemojo") {
                    alert("留言成功");
                    window.location.href = "./leave_words.html";
                }
                else {
                    alert("error:\n" + xmlrequesthttp.responseText);
                }
            }
        }
            xmlrequesthttp.open("POST","leave_words.php",true);
            xmlrequesthttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xmlrequesthttp.send(msg);
    }
}
