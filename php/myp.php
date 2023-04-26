<html>
    
    <title>level3sod</title>
    <link rel="stylesheet" href="style.css">
    <body>
        <form method="post">
            <div><h1>Sign Up</h1>
                <label >Fullname:</label><br>
                <input type="text"  name="fullname" class="fullname" placeholder = "Fullname"><br>
                <label >username:</label><br>
                <input type="text" name="username" class="username" placeholder = "Username"><br>
                <label >phone number:</label><br>
                <input type="text" name="phonenumber" placeholder = "Phone number"><br>
                <label >password:</label><br>
                <input type="password" name="password" placeholder = "Enter password"><br>
                <button type="submit">Sign up</button>
            </div>
</form>
</body>
</html>
<?php
       if ($_POST) {
        
        $fullname = $_POST['fullname'];
        $username = $_POST['username'];
        $phonenumber = $_POST['phonenumber'];
        $password = $_POST['password'];
        $con = mysqli_connect("localhost","root","","myUsers");
        $save = mysqli_query($con,"INSERT INTO users VALUES('$fullname','$username','$phonenumber','$password')");
       } 
       
?>