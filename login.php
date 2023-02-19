<?php

$servername = "xxxx";
$username = "xxx";
$password = "xxx";
$dbname = "xxx";



$usr = $_POST["loginUser"];
$pass = $_POST["loginPass"];

$conn=mysqli_connect($servername,$username,$password,$dbname);
      if(!$conn){
          die('Could not Connect MySql Server');
        }
        else{
          echo "Uspjesna konekcija!";
        }
      $sql = "SELECT COUNT(*) from Users WHERE name='$usr' AND password='$pass'";
        $result = mysqli_query($conn, $sql);
        $rownum = mysqli_num_rows($result);

      if($rownum>0){
        
       header("Location: http://loginforma/login.html"); 
       echo $rownum;
        echo '<script type="text/javascript">alert("Uspjesan login");</script>';
      }
      else{
        echo '<script type="text/javascript">alert("Pogresna sifra/username");</script>';
      }


?>