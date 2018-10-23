<?php 
$link = mysqli_connect('localhost','root','');
if (!$link) { 
	die('Could not connect to MySQL: ' . mysqli_error());
} 
echo 'Connection OK';
mysqli_close($link);
?> 