<?php
session_start();
if (isset($_SESSION["user"])) {
   header("Location: index2.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<style>
    body{
    background:linear-gradient(120deg,#ffffef,#51e4bf);
    background-repeat:no-repeat;
    }
    span{
        color:#fe34c3;
    }
    </style>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="styleproject.css">
    
</head>
<body>
    <div class="container">
        <?php
        if (isset($_POST["login"])) {
           $email = $_POST["email"];
           $password = $_POST["password"];
            require_once "database.php";
            $sql = "SELECT * FROM users WHERE email = '$email'";
            $result = mysqli_query($conn, $sql);
            $user = mysqli_fetch_array($result, MYSQLI_ASSOC);
            if ($user) {
                if (password_verify($password, $user["password"])) {
                    session_start();
                    $_SESSION["user"] = "yes";
                    header("Location:index2.php");
                    die();
                }else{
                    echo "<div class='alert alert-danger'>Password does not match</div>";
                }
            }else{
                echo "<div class='alert alert-danger'>Email does not match</div>";
            }
        }
        ?>
         <div class="reg">
        <h2><center>Login Page</center></h2>
    </div>
      <form action="loginproject.php" method="post">
        <div class="form-group">
            <input type="email" placeholder="Enter Email:" name="email" class="form-control">
        </div><br>
        <div class="form-group">
            <input type="password" placeholder="Enter Password:" name="password" class="form-control">
        </div><br>
        <div class="form-btn">
            <input type="submit" value="Login" name="login" class="btn btn-primary">
        </div><br>
      </form>
     <div><p>Not registered yet <a href="registrationpage.php"><span>Register Here</span></a></p></div>
    </div>
</body>
</html>
