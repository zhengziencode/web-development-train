<?php
/**
 * Created by PhpStorm.
 * User: ZZE-LapTop
 * Date: 2018/5/26
 * Time: 18:40
 */
function save_to_database($username,$password,$email){
    $sql_handle = @mysqli_connect("sql209.fiberstorm.net", "fsnet_22106455", "147258","fsnet_22106455_db");
    if (mysqli_connect_errno()) {
        echo "connect error".mysqli_connect_error();
    }
    mysqli_set_charset($sql_handle,"utf8");
    date_default_timezone_set("Asia/Shanghai");
    $time = date("Y-m-d h:i:s",time());

    $sql="INSERT INTO tb (username,password,email,time) VALUES ('$username','$password','$email','$time');";

    if(!@mysqli_query($sql_handle,"CREATE TABLE IF NOT EXISTS tb(id INT DEFAULT 1,username VARCHAR(255) PRIMARY KEY,password VARCHAR(255) NOT NULL,email VARCHAR(255) NOT NULL,time DATETIME);"));

    if(!@mysqli_query($sql_handle,$sql)){
        echo "save failed";
    }
    else
        echo "ok_zzemojo";

    @mysqli_close($sql_handle);
}
if(@$_POST["username"]!="" && @$_POST["password"]!="" && @$_POST["email"]!="") {
    save_to_database($_POST["username"],$_POST["password"],$_POST["email"]);
}
else{
    echo "error,wrong data";
}
