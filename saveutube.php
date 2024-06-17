<?php

$fistname = $_POST["fname"];
$lastname = $_POST["lname"];
$email = $_POST["email"];
$mobile = $_POST["mobile"];
$conn = mysqli_connect("localhost", "root", "", "database_form") or die("connection failed");
$sql = "INSERT INTO databse_table(First_name, Email, Mobile, Last_name) VALUES ('{$fistname}','{$email}','{$mobile}' ,'{$lastname}')";
$result = mysqli_query($conn, $sql) or die("Query Failed!");
header("location: http://localhost/wt/youtube.php");
mysqli_close($conn);
?>