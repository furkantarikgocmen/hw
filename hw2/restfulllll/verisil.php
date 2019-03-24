<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
$response = array();
$kullanici_id = $_POST['kullanici_id'];

if(isset($kullanici_id) && $kullanici_id != "")
{
	require_once __DIR__ . '/db_connect.php';
	$db = new DB_CONNECT();
	$result = mysql_query("DELETE FROM kullanici WHERE kullanici.kullanici_id = $kullanici_id");
	
	if(mysql_affected_rows() > 0)
	{
		$response["success"] = 1;
		$response["message"] = "successfully";
		echo(json_encode($response));
	}
	else
	{
		$response["success"] = 0;
		$response["message"] = "Kullanici Bulunamadı";
		echo(json_encode($response));
	}
}
if($kullanici_id == "")
{
	$response["success"] = 0;
	$response["message"] = "Kullanici ID Gerekli";
	echo(json_encode($response));
}
?>