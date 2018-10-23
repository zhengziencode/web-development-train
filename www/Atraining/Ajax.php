<?php
/**
 * Created by PhpStorm.
 * User: ZZE-LapTop
 * Date: 2018/5/25
 * Time: 11:07
 */

if(!$_GET["name"] || !$_GET["pw"]){
    echo "no datas";
}
else
    echo "recieved<br>";
echo "data:".$_GET["name"];