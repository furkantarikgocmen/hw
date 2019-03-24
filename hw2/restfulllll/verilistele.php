<?php 
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
$response = array();

require_once __DIR__ . '/db_connect.php';

$db = new DB_CONNECT();

$result = mysql_query("SELECT * FROM `kullanici`") or die(mysql_error());

if (mysql_num_rows($result) > 0)
{
	$response["kullanici"] = array();
	
	while($row = mysql_fetch_array($result))
	{
		$kullanici = array();
		$kullanici["kullanici_id"] = $row["kullanici_id"];
		$kullanici["kullanici_adi"] = $row["kullanici_adi"];
		$kullanici["kullanici_sifre"] =$row["kullanici_sifre"]; //Burayla oynadım.
				
		array_push($response["kullanici"], $kullanici);
	}
	
	//$response["success"] = 1;
	echo(json_encode($response));
}
else
{
	$response["success"] = 0;
	$response["message"] = "Hata Oluştu";
	echo(json_encode($response));
}
?>