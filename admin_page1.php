<?php

@include 'confo.php';

session_start();

if(!isset($_SESSION['admin_name'])){
   header('location:login_form.php');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>admin page</title>

   <!-- custom css file link  -->
   <link rel="stylesheet" href="sty.css">

</head>
<body>
   
<div class="container">

   <div class="content">
      <h1>welcome <span><?php echo $_SESSION['admin_name'] ?></span></h1>
      <p>This is Admin Portal</p>
      <a href="admin.php" class="btn">Admin Portal</a>
    
      <a href="logout.php" class="btn">logout</a>
   </div>

</div>

</body>
</html>