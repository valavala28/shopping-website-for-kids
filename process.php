<?php 

    if(isset($_POST['btn-send']))
    {
       $UserName = $_POST['UName'];
       $Email = $_POST['Email'];
       $Subject = $_POST['Subject'];
       $Msg = $_POST['msg'];

       if(empty($UserName) || empty($Email) || empty($Subject) || empty($Msg))
       {
           header('location:contactprojectf.php?error');
       }
       else
       {
           $to = "admin@onlineittuts.com";
           if(mail($to,$Subject,$Msg,$Email))
           {
               header("location:contactprojectf.php?success");
           }
       }
    }
    else
    {
        header("location:contactprojectf.php");
    }
?>