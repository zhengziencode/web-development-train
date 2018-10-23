<?php
/**
 * Created by PhpStorm.
 * User: ZZE-LapTop
 * Date: 2018/5/16
 * Time: 21:07
 */
if(!$_POST["account"] || !$_POST["password"]){
    echo "No datas";
}
else {
    $sql=@mysqli_connect("localhost","root","") or die("error");
    echo "connected<br/>";

    @mysqli_select_db("dbtest",$sql);

    $result=@mysqli_query("SELECT *FROM tbdemo WHERE account='hello'",$sql);
    if(!$result)
        die("error".@mysqli_error());
    print_r($result);
    mysqli_close($sql);
}