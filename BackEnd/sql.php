<?php
// Path: BackEnd/sql.php
header('Content-Type: application/json');

$host="localhost";
$user="root";
$password="root";

$db = "db_users";

try{

$con = new mysqli($host,$user,$password,$db);

// echo json_encode(["status" => "Success", "message" => "Connected and used db_users"]);

$res = $con->query("select * from tb_users where Fullname = \"Loren Ipsum\"");

$total = $res->fetch_row();

echo json_encode(["status"=>"Success","object" => $total]);

$con->close();
}catch(Throwable $e){
echo json_encode(["DB Error: " => $e]);
}

?>