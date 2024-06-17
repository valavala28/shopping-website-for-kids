<?php
//error_reporting(E_ALL);
//ini_set('display_errors',1);
  // {
    include 'connect.php';
    if($_SERVER['REQUEST_METHOD']=='POST'){
    $email=$_POST['email'];
    $password=$_POST['password'];
    $sql="select * from 'REGISTER' where Email='$email'";
    $result=mysqli_query($con,$sql);
    if($result){
        $num=mysqli_num_rows($result);
        if($num>0){
            header('location:signup2.php');
          }
        else{
            $sql1="insert into 'REGISTER' values('$email','$password')";
    $result1=mysqli_query($con,$sql1);}
    if($result1){
        header('location:signup2.php');
    }
    else{
        echo "not";
    }
        }  }
?>




<!DOCTYPE html>
<html>
<head>
	<title>Sign up</title>
	<link rel="stylesheet" type="text/css" href="style1.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>
        function validatePassword() {
            var password = document.getElementById("password").value;
            var confirmPassword = document.getElementById("confirmPassword").value;

            if (password != confirmPassword) {
                alert("Passwords do not match!");
                return false;
            }

            return true;
        }
    </script>
</head>
<body id="signup-body"><center>
	<img src="/opt/lampp/htdocs/wt/1.webp" class="logo">
	<div id="signup-box">
		<div class="error"> </div>
        <p id="sign-head">Sign up for Kiddy's world</p>
        <form id="login-form" method="post" onsubmit="return validatePassword()">
            <label>Email Address</label><br>
            <input type="email" name="email" placeholder="you@gmail.com" class="text-box" required><br>
            <label>Password</label><br>
            <input type="password" name="password" placeholder="Your Password" class="text-box" id="password"required>
            <label>Confirm Password</label><br>
            <input type="password" name="password_2" placeholder="Confirm Your Password" class="text-box" id="confirmPassword" required>
            <input type="checkbox">I have read and agree to the <label class="sp">terms of services</label><br>
            <input  type="submit" value="Sign Up" class="sign-in-btn">

        </form>
    </div> 
    <p class="sin2">Already have account?<a href="front.php">Login</a></p></center>

</body>
</html>