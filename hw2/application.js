var result = document.querySelector("#output");
var userId = document.querySelector("#user_id");
var userName = document.querySelector("#user_name");
var userPassword = document.querySelector("#user_password");

function getData() {
    fetch("http://localhost/restfulllll/verilistele.php")
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(JSON.stringify(myJson));
            result.textContent = JSON.stringify(myJson);
        });
}

function operation(operation) {

    var formData = new FormData();
    switch (operation) {
        case "veriekle" :
            formData.append('kullanici_adi', ""+userName.value+"");
            formData.append('kullanici_sifre', ""+userPassword.value+"")
            break;
        case "veriara" :
            formData.append('kullanici_adi', ""+userName.value+"");
            break;
        case "verisil" :
            formData.append('kullanici_id',""+userId.value+"")
            break;
        case "veriguncelle" :
            formData.append('kullanici_id',""+userId.value+"")
            formData.append('kullanici_adi', ""+userName.value+"");
            formData.append('kullanici_sifre', ""+userPassword.value+"")
            break;
    }

    fetch('http://localhost/restfulllll/'+operation+'.php', {
        method: 'POST',
        headers : new Headers(),
        body : formData
    }).then(function (response) {
        return response.text();
    }).then(function (myJson) {
        console.log(JSON.stringify(myJson));
        result.textContent = JSON.stringify(myJson);
    })
    //formData.clear;
    //console.log(formData);
}