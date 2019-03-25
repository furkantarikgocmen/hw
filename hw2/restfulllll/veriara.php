<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
$response = array();
$kullanici_adi = $_POST['kullanici_adi'];

//Buna şimdilik gerek yok, Ancak API tarafında adı ve id'sine göre arama yapma seçeneği getir.

if(isset($kullanici_adi) && $kullanici_adi != "")
{
	require_once __DIR__ . '/db_connect.php';
	
	$db = new DB_CONNECT();
	
	$result = mysql_query("SELECT * FROM kullanici WHERE kullanici.kullanici_adi LIKE '%$kullanici_adi%' ");
	
	if(mysql_num_rows($result) > 0)
	{
		$response["kullanici"] = array();
		
		while($row = mysql_fetch_array($result))
		{
			$kullanici = array();
			
			$kullanici['kullanici_id'] = $row['kullanici_id'];
			$kullanici['kullanici_adi'] = $row['kullanici_adi'];
			$kullanici['kullanici_sifre'] = $row['kullanici_sifre'];
			
			array_push($response['kullanici'], $kullanici);
			
			//Kullanicilar Olan Herşeyi Kullanici Yaptım
		}
		
		$response["success"] = 1;
		
		//echo json_encode($response);
		
	}
	
	else
	{
		$response["success"] = 0;
		$response["message"] = "Kullanıcı Bulunamadı";
		//echo(json_encode($response));
	}
}

if($kullanici_adi == "")
{
	$response["success"] = 0;
	$response["message"] = "Kullanıcı Adı Gerekli";
	//echo(json_encode($response));
}
echo(json_encode($response));
?>