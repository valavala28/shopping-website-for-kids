<?php
session_start();
if (isset($_SESSION["user"])) {
   header("Location: frontpage.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Page</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="contactnewshop.css">
    <link rel="stylesheet" href="contactnew.css">
    <script src="https://kit.fontawesome.com/2bceedae5f.js" crossorigin="anonymous"></script>
</head>
<body>
   <div class="cls">
    <header>
        <img src="1.webp" class="ii">
        <h1 class="hh1">Kiddy<span>'S</span>&nbsp;&nbsp;World</h1>
    </header>
    </div>
    <ul class="navmenu">
        <li><a href="new shop.html">Home</a></li>
        <li><a href="#">Sign In</a></li>
        <li><a href="#">Sign Up</a></li>
        <li><a href="#aboutpage">About</a></li>
        <li><a href="procontact.html">Contact</a></li>
        </ul>

    <div class="container">
        <?php
        if (isset($_POST["submit"])) {
           $fullName = $_POST["fullname"];
           $email = $_POST["email"];
           $phonenumber = $_POST["phonenumber"];
           $message = $_POST["message"];
           require_once "/opt/lampp/htdocs/wt/databasecontact.php";
            
            $sql = "INSERT INTO contact (full_name, email, phonenumber,message) VALUES ( ? , ?, ?, ? )";
            $stmt = mysqli_stmt_init($conn);
            $prepareStmt = mysqli_stmt_prepare($stmt,$sql);
            if ($prepareStmt) {
                mysqli_stmt_bind_param($stmt,"sss",$fullName, $email, $phonenumberHash);
                mysqli_stmt_execute($stmt);
                echo "<div class='alert alert-success'>Successfully sent.</div>";
            }else{
                die("Something went wrong");
            }
        }
        ?>
    <div class="contact">
      <div class="uppage">
        <h2>GET IN TOUCH  </h2><br>
        <i class="fa-solid fa-phone"></i>&nbsp;&nbsp;PHONE&nbsp;&nbsp;:&nbsp;&nbsp;8767574787<br><br>
        <i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;EMAIL&nbsp;&nbsp;:&nbsp;&nbsp;<span>unknown@77.gmail.com</span><br><br>
        <i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;ADDRESS&nbsp;&nbsp;:&nbsp;&nbsp;Bangalore<br><br><br>
        </div>
        <div class="infotwo">
          <div class="leftt">
       <form>
        <input type="text" id="fname" name="fullname" placeholder="your name"><br>
        <input type="email" id="lname" name="email" placeholder="your email address"><br>
        <input type="text" id="sname" name="phonenumber" placeholder="your Phone Number"><br>
        <input type="text" id="kname" name="kname" placeholder="your address"><br>
       </form>

       </div>
       <div class="rightt">
        <form>
          <textarea id="message" name="message" rows="10" cols="50"  placeholder="enter your message">
            </textarea>
            <br>
            
            <input type="submit" name="submit" value="submit">
          </form>
          <br>
       </div>
       </div>
    
       <hr>
        <div>
        
      </div>
    </div>
</body>
</html>


