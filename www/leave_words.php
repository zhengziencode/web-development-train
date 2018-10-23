<?php
/**
 * Created by PhpStorm.
 * User: ZZE-LapTop
 * Date: 2018/6/3
 * Time: 19:30
 */
function saveToDB($name,$email,$text){
    date_default_timezone_set("Asia/Shanghai");
    $time = date("Y-m-d h:i:s",time());
    //----------------------------------------------------------------------------------------------------
    //$sql_handle = @mysqli_connect("localhost", "root", "","db_demo");//test
    //---------------------------------------------------------------------------------------------------
    $sql_handle = @mysqli_connect("sql209.fiberstorm.net", "fsnet_22106455", "147258","fsnet_22106455_db");
    if (mysqli_connect_errno()) {
        echo "connect error".mysqli_connect_error();
    }
    if(!@mysqli_query($sql_handle,"CREATE TABLE IF NOT EXISTS tb_words(id INT PRIMARY KEY AUTO_INCREMENT,name VARCHAR(255) NOT NULL,email VARCHAR(255) NOT NULL,text VARCHAR(255) NOT NULL,time DATETIME);"));

    $sql="INSERT INTO tb_words VALUES ('null','$name','$email','$text','$time');";

    if(!@mysqli_query($sql_handle,$sql)){
        echo "save failed";
    }
    else
        echo "ok_zzemojo";

    @mysqli_close($sql_handle);
}

function getWords(){
    date_default_timezone_set("Asia/Shanghai");
    $time = date("Y-m-d h:i:s",time());
    //----------------------------------------------------------------------------------------------------
    //$sql_handle = @mysqli_connect("localhost", "root", "","db_demo");//test
    //---------------------------------------------------------------------------------------------------
    $sql_handle = @mysqli_connect("sql209.fiberstorm.net", "fsnet_22106455", "147258","fsnet_22106455_db");
    if (mysqli_connect_errno()) {
        echo "connect error".mysqli_connect_error();
    }
    if(!@mysqli_query($sql_handle,"CREATE TABLE IF NOT EXISTS tb_words(id INT PRIMARY KEY AUTO_INCREMENT,name VARCHAR(255) NOT NULL,email VARCHAR(255) NOT NULL,text VARCHAR(255) NOT NULL,time DATETIME);"));
    $sql="select name,email,text,time from tb_words order by id desc;";
    $result=mysqli_query($sql_handle,$sql);
    if($result){
        while($row=mysqli_fetch_row($result)) {
            echo "姓名:";
            echo $row[0];
            echo "&nbsp;&nbsp;&nbsp;&nbsp;";
            echo "邮箱:";
            echo $row[1];
            echo "&nbsp;&nbsp;&nbsp;&nbsp;";
            echo "时间:";
            echo $row[3];
            echo "<br>";

            echo "留言:";
            echo $row[2];
            echo "<br>";

            echo "\n";
        }
    }
    else{
        echo "error";
    }

    @mysqli_close($sql_handle);
}

if($_POST["method"]=="save"){
    saveToDB($_POST["name"],$_POST["email"],$_POST["text"]);
}
else if($_POST["method"]=="show"){
    getWords();
}
else{
    echo "bad request";
}
