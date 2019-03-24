<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
$response = array();
$kullanici_id = $_POST['kullanici_id'];
$kullanici_adi = $_POST['kullanici_adi'];
$kullanici_sifre = $_POST['kullanici_sifre'];
//echo(json_encode($kullanici_id)); Denemek için yaptım.

if(isset($kullanici_id) && $kullanici_id != "" && isset($kullanici_adi) && $kullanici_adi != "" && isset($kullanici_sifre) && $kullanici_sifre != "" )
{
	require_once __DIR__ . '/db_connect.php';
	
	$db = new DB_Connect();
	
	$result = mysql_query("UPDATE kullanici SET kullanici.kullanici_adi = '$kullanici_adi',kullanici.kullanici_sifre = '$kullanici_sifre' WHERE kullanici.kullanici_id = $kullanici_id");
	
	if(mysql_affected_rows() > 0)
	{
		$response["success"] = 1;
		$response["message"] = "Successfully";
		echo(json_encode($response));
	}
	else
	{
		$response["success"] = 0;
		$response["message"] = "Kullanıcı Bulunamadı";
		echo(json_encode($response));
	}
}

if($kullanici_id == "")
{
	$response["success"] = 0;
	$response["message"] = "Kullanici ID Gerekli";
	echo(json_encode($response));
}

if($kullanici_adi == "")
{
	$response["success"] = 0;
	$response["message"] = "Kullanici Adı Gerekli";
	echo(json_encode($response));
}

if($kullanici_sifre == "")
{
	$response["success"] = 0;
	$response["message"] = "Kullanıcı Şifre gerekli";
	echo(json_encode($response));
}
?>