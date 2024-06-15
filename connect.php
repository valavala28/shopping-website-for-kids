<?php
$hostname="localhost"; //local server name default localhost
$username="root"; //sql username default is root.
$password="";
//blank if no password is set for sql.
$database="GROUP11"; //database name which you created
$con=mysqli_connect($hostname,$username,$password,$database);
if(!$con)
{
die('Connection Failed');
}

?>


