var table = document.querySelector("#table");
var userId = document.querySelector("#user_id");
var userName = document.querySelector("#user_name");
var userPassword = document.querySelector("#user_password");

var row,col1,col2,col3;

function getData() {
    fetch("http://oguzhaninan.com/restful/verilistele.php")
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            clearTable();
            clearTxt();
            for(var i = 0; i < myJson['kullanici'].length; i++)
            {
                row = table.insertRow(0);
                col1 = row.insertCell(0);
                col2 = row.insertCell(1);
                col3 = row.insertCell(2);
                /*col1.innerHTML += myJson['kullanici'][i]['kullanici_id'];
                col2.innerHTML += myJson['kullanici'][i]['kullanici_adi'];
                col3.innerHTML += myJson['kullanici'][i]['kullanici_sifre'];*/
                col1.innerHTML += myJson.kullanici[i].kullanici_id;
                col2.innerHTML += myJson.kullanici[i].kullanici_adi;
                col3.innerHTML += myJson.kullanici[i].kullanici_sifre;
            }
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

    fetch('http://oguzhaninan.com/restful/'+operation+'.php', {
        method: 'POST',
        headers : new Headers(),
        body : formData,
    }).then(function (response) {
        return response.json();
    }).then(function (myJson) {
        clearTable();
        if(myJson['success'] == 0)
        {
            alert(myJson['message'])
        }
        else
        {
            if(operation == "veriara")
            {
                for(var i = 0; i < myJson['kullanici'].length; i++)
                {
                    row = table.insertRow(0);
                    col1 = row.insertCell(0);
                    col2 = row.insertCell(1);
                    col3 = row.insertCell(2);
                    /*col1.innerHTML += myJson['kullanici'][i]['kullanici_id'];
                    col2.innerHTML += myJson['kullanici'][i]['kullanici_adi'];
                    col3.innerHTML += myJson['kullanici'][i]['kullanici_sifre'];*/
                    col1.innerHTML += myJson.kullanici[i].kullanici_id;
                    col2.innerHTML += myJson.kullanici[i].kullanici_adi;
                    col3.innerHTML += myJson.kullanici[i].kullanici_sifre;
                    clearTxt();
                }
            }
            if(operation == "verisil" || operation == "veriekle" || operation == "veriguncelle")
            {
                alert("Process Succesful :)")
                clearTable();
                getData();
                clearTxt();
            }
        }
    })

}
function clearTable(){
    table.textContent = null;
    row = table.insertRow(0);
    col1 = row.insertCell(0);
    col2 = row.insertCell(1);
    col3 = row.insertCell(2);
    col1.innerHTML += "User ID";
    col2.innerHTML += "User Name";
    col3.innerHTML += "User Password";
}
function clearTxt() {
    userId.value = "";
    userName.value = "";
    userPassword.value = "";

}