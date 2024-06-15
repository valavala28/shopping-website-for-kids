<html>
<body>
<h3><center>MARKS SHEET</center></h3>
<form method='post' action="">
<label>id no:<label><input type='text' name='txtreg'/><br><br>
<input type='submit' value='show'>
</form></body></html>
</body>
</html>
<?php
if($_post)
{
$rg=$_post['txtreg'];
$con=pg_connect("host=localhost dname=practise user=ramya password=#Ramya1730");
if($con)
$qry='select * from student where id=$rg';
$result=pg_query($con,$qry);
$nos=pg_num_rows($reslt);
while($row=pg_fetch_row($result)){
	echo"<br>\n";
	echo 'id:$row[0] name:$row[1] age:$row[2]';}
	}
