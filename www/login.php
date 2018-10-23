<?php
/**
 * Created by PhpStorm.
 * User: ZZE-LapTop
 * Date: 2018/5/26
 * Time: 18:40
 */
function admit_to_login($username,$password){
    $sql_handle = @mysqli_connect("sql209.fiberstorm.net", "fsnet_22106455", "147258","fsnet_22106455_db");
    if (mysqli_connect_errno()) {
        die ("connect error".mysqli_connect_error());
    }
    mysqli_set_charset($sql_handle,"utf8");
    date_default_timezone_set("Asia/Shanghai");
    $time = date("Y-m-d h:i:s",time());

    $sql = "SELECT *FROM tb WHERE (username='$username' AND password='$password');";
    //$rlt=@mysqli_query($sql_handle,"SELECT username FROM db WHERE (username='$_POST[username]' AND password='$_POST[password]');");
    $rlt=mysqli_query($sql_handle,$sql);
    if($rlt==false){
        echo "error of query";
    }
    else {
        $saved=false;
        while($row=mysqli_fetch_array($rlt)){
            if($row["username"]==$username&&$row["password"]==$password){
                $saved=true;
                break;
            }
        }
        if($saved){
            echo "ok_zzemojo";
        }
        else{
            echo "pw error";
        }
    }
    @mysqli_close($sql_handle);
}
if($_POST["username"]!="" && $_POST["password"]!=""){
    admit_to_login($_POST["username"],$_POST["password"]);
}