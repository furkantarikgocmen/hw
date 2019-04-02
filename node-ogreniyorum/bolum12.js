/*Express Framewrok
const express = require('express');
const app = express();

app.get('/',(request, response) =>{
    response.send('Merhaba Express');
});

app.listen(3000,() =>{
    console.log("Express Server Çalıştı");
});
*/
/*
const express = require('express');
const app = express();
/*
app.get('/',(req,res) =>{
    res.send('Burası index');
});

app.listen(3000,()=>{
    console.log("Dinleme Başladı");
});

//? işareti kullanımı // localhost/ileisim; // zorunlu olmayan
app.get('/ile(ti)?im',(req,res) =>{
    res.send('Burası index');
});

app.listen(3000,()=>{
    console.log("Dinleme Başladı");
});

// Işareti kullanımı // localhost/iletRANDOMisim; // yerine herhangi ifade gelebilir
app.get('/ilet*isim',(req,res) =>{
    res.send('Burası index');
});

app.listen(3000,()=>{
    console.log("Dinleme Başladı");
});

// Işareti kullanımı // localhost/iletiiiiiisim; // soldaki ifadenin aynısı olmalı
app.get('/iletisi+m',(req,res) =>{
    res.send('Burası index');
});

app.listen(3000,()=>{
    console.log("Dinleme Başladı");
});


app.get('/iletisim',(req,res) =>{
    res.send('Burası index');
});

app.post('/iletisim',(req,res) =>{
    res.send('Burası index');
});

app.all('/iletisim',(req,res) =>{
    res.send('Burası index');
});

app.listen(3000,()=>{
    console.log("Dinleme Başladı");
});
*/

/*Router Nesnesi Kullanımı
const express = require('express');
const app = express();

const signIn = require('./routes/signin');

app.use('/',signIn); //app.use('/user',signIn) dersek localhost/user/signin olarak çalışır;

app.listen(3000, () =>{
    console.log("Express server çalıştı")
});
*/

/*Middleware 1
const express = require('express');
const app = express();

const signIn = require('./routes/signin');
const profile = require('./routes/profile');

app.use((req,res,next) => {
    let kullaniciGirisDurumu = true;
    if(kullaniciGirisDurumu)
        next();
    else
        res.send("Lütfen giriş Yapınız");
});

app.use('/',signIn); //app.use('/user',signIn) dersek localhost/user/signin olarak çalışır;
app.use('/profile', profile);

app.listen(3000, () =>{
    console.log("Express server çalıştı")
});
*/

const express = require('express');
const app = express();

const signIn = require('./routes/signin');
const profile = require('./routes/profile');
//helper
const isLogin = require('./helper/isLogin');

app.use('/',signIn); //app.use('/user',signIn) dersek localhost/user/signin olarak çalışır;
app.use('/profile', profile);

app.listen(3000, () =>{
    console.log("Express server çalıştı")
});