<html>
<head> <title> User Acess </title> </head>
<body bgcolor="bisque"> <br>
<center>
<?php
$firstname = 'ramya';
$middlename = ' ';
$lastname = 'yandrapati'; setcookie('first_name',$firstname,time() + 86400);
setcookie('middle_name',$middlename,time() + 86400);
setcookie('last_name',$lastname,time() + 86400); print "cookies set";
?>
</center>
</body>
</html>

