<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
$response = array();
$kullanici_adi = $_POST['kullanici_adi'];
$kullanici_sifre = $_POST['kullanici_sifre'];

if(isset($kullanici_adi) && isset($kullanici_sifre)  && $kullanici_adi != "" && $kullanici_sifre != "")
{
	require_once __DIR__ . '/db_connect.php';
	
	$db = new DB_CONNECT();
	
	$result = mysql_query("INSERT INTO kullanici (kullanici_adi, kullanici_sifre) VALUES ('$kullanici_adi', '$kullanici_sifre')");
	
	if(mysql_affected_rows() > 0)
	{
		$response["success"] = 1;
		$response["message"] = "successfully";
		echo(json_encode($response));
	}
	
	else
	{
		$response["success"] = 0;
		$response["message"] = "Hata Oluştu";
		echo(json_encode($response));
	}
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
	$response["message"] = "Kullanıcı Şifresi gerekli";
	echo(json_encode($response));
}
?>