<?php
// Path: BackEnd/sql.php
header('Content-Type: application/json');

$host="localhost";
$user="root";
$password="root";

$db = "db_users";

$con = new mysqli($host,$user,$password,$db);

if($con->connect_error){
    die(json_encode(["error" => "Connection Failed to connect:" . $con->connect_error]));
}

echo json_encode(["status" => "Success", "message" => "Connected and used db_users"]);

$con->close();
?>