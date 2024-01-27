<?php
 $servername = "localhost";
 $username = "root";
 $pass = "";
 $dbname = "tma";
 
 // Create connection
 $conn = new mysqli($servername,$username, $pass, $dbname);
 
// Check connection
if ($conn->connect_error) {
    die("Connection failed: ". $conn->connect_error);
}


    // Taking values from the form data(input)

    $email = $_POST['email'];

    $password = $_POST['password'];
    
    $passwordHash = password_hash($password, PASSWORD_DEFAULT);
        
         $sql = "SELECT * FROM dataConversion WHERE email = '$email'";
         $result = mysqli_query($conn, $sql);
         $user = mysqli_fetch_array($result, MYSQLI_ASSOC);
         if ($user) {
             if (password_verify($password, $user["password"])) {
                echo "<div'>great job!</div>";
             }else{
                 echo "<div'>Password does not match</div>";
             }
         }else{
             echo "<div'>Email does not match</div>";
         }
     
    // Close connection
    mysqli_close($conn);
    
    ?>