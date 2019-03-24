<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Başlıksız Belge</title>
</head>

<body>
<form id="form1" name="form1" method="post" action="veriekle.php">
  <label for="textfield3">Kullanıcı ID:</label>
  <input type="text" name="kullanici_id" id="textfield3">
  <label for="textfield">Kullanıcı Adı</label>
  <input type="text" name="kullanici_adi" id="textfield">
  <label for="textfield2">Şifre</label>
  <input type="text" name="kullanici_sifre" id="textfield2">
  <input type="submit" name="submit" id="submit" value="Yeni Kayıt">
</form>
<form id="form2" name="form2" method="post" action="verisil.php">
	<label for="textfield3">Kullanıcı ID:</label>
  <input type="text" name="kullanici_id" id="textfield3">
  <label for="textfield">Kullanıcı Adı</label>
  <input type="text" name="kullanici_adi" id="textfield">
  <label for="textfield2">Şifre</label>
  <input type="text" name="kullanici_sifre" id="textfield2">
  <input type="submit" name="submit" id="submit" value="Veri Sil">
</form>
<form id="form3" name="form3" method="post" action="veriguncelle.php">
	<label for="textfield3">Kullanıcı ID:</label>
  <input type="text" name="kullanici_id" id="textfield3">
  <label for="textfield">Kullanıcı Adı</label>
  <input type="text" name="kullanici_adi" id="textfield">
  <label for="textfield2">Şifre</label>
  <input type="text" name="kullanici_sifre" id="textfield2">
  <input type="submit" name="submit" id="submit" value="Veri Güncelle">
</form>
<form id="form4" name="form4" method="post" action="veriara.php">
	<label for="textfield3">Kullanıcı ID:</label>
  <input type="text" name="kullanici_id" id="textfield3">
  <label for="textfield">Kullanıcı Adı</label>
  <input type="text" name="kullanici_adi" id="textfield">
  <label for="textfield2">Şifre</label>
  <input type="text" name="kullanici_sifre" id="textfield2">
  <input type="submit" name="submit" id="submit" value="Veri Ara">
</form>
	
<form id="form5" name="form5" method="post" action="verilistele.php">
  <input type="submit" name="submit2" id="submit2" value="Bütün Veriyi Listele">
</form>

</body>
</html>