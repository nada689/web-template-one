<?php

$servername = "localhost";
$username = "root";
$pass = "";
$dbname = "tma";
 
// Create connection
$conn = new mysqli($servername,
    $username, $pass, $dbname);
 
// Check connection
if ($conn->connect_error) {
    die("Connection failed: "
        . $conn->connect_error);
}

// Taking all values from the form data(input)

$firstName = $_POST['fname'];

$lastName = $_POST['lname'];

$email = $_POST['email'];

$password = $_POST['password'];
$confirmpassword = $_POST['cpassword'];
$passwordHash = password_hash($password, PASSWORD_DEFAULT);

// here our table name is dataConversion

/*$sqql = "SHOW TABLES FROM $dbname";
$result1 = mysqli_query($conn,$sqql);
while ($row = mysqli_fetch_row($result1)) {
     if ($row != "dataConversion") {
        $sql = "CREATE TABLE dataConversion (
            id int auto_increment primary key,
            fname varchar(500) NOT null,
            lname varchar(500) NOT null,
            email varchar(500),
            password varchar(500)
        )";
            if(mysqli_query($conn, $sql)){
                echo "<h3>data stored in a database successfully.</h3>";
         
            } else{
                echo "ERROR: Hush! Sorry $sql. "
                . mysqli_error($conn);
            }
                
  }else{
    echo "Yes, this table still exists in the session's schema.";
  }
}   */ 

        $errors = array();
           
           if (empty($firstName)OR empty($lastName) OR empty($email) OR empty($password) OR empty($confirmpassword)) {
            array_push($errors,"All fields are required");
           }
           if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            array_push($errors, "Email is not valid");
           }
           if (strlen($password)<8) {
            array_push($errors,"Password must be at least 8 charactes long");
           }
           if ($password!==$confirmpassword) {
            array_push($errors,"Password does not match");
           }
           $sqll = "SELECT * FROM dataConversion WHERE email = '$email'";
           $result = mysqli_query($conn, $sqll);
           $rowCount = mysqli_num_rows($result);
           if ($rowCount>0) {
            array_push($errors,"Email already exists!");
           }
           if (count($errors)>0) {
            foreach ($errors as  $error) {
                echo "<div >$error</div>";
            }
           }else{  $sq = "INSERT INTO dataConversion (fname,lname, email, password)  VALUES ('$firstName',
            '$lastName','$email','$passwordHash')";
         
         if ($conn->query($sq) === TRUE) {
            $last_id = $conn->insert_id;
            echo "New record created successfully. Last inserted ID is: " . $last_id;
          } else {
            echo "Error: " . $sq . "<br>" . $conn->error;
          }
        }
         
        // Close connection
        mysqli_close($conn);
        
        
        ?>


