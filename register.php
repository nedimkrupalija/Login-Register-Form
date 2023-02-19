<?php
 $servername = "xxxx";
 $username = "xxx";
 $password = "xxx";
 $dbname = "xxx";
 

   $usr = $_POST["user"];
   $pass = $_POST["pass"];
   $mail = $_POST["mail"];
   $chkPass = $_POST["chkPass"];


   $conn=mysqli_connect($servername,$username,$password,$dbname);
      if(!$conn){
          die('Could not Connect MySql Server');
        }
        else{
         echo "Konekcija uspjesna  ";
        }
      $sql = "INSERT INTO Users (name, password, admin) VALUES ('$usr', '$pass', 0)";
        if(mysqli_query($conn,$sql)){
         header("Location: http://loginforma/", true, 301);
        }
        else{
         echo "Neuspjesan unos!";
         echo '<script type="text/javascript">alert("Korisnik sa tim imenom vec postoji");</script>';
         echo '<script src="./js/index.js></script>';
        }

?>