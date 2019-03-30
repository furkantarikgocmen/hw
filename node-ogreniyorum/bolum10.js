/*Http Server Oluşturmak
const http = require('http');
const server = http.createServer((request, response) => {
    console.log("Bir istekte bulunuldu");
    console.log(request.url);
    console.log(request.headers);

    response.writeHead(200,{'content-type' : 'text/html; charset=utf-8'});
    response.write("<b>Merhaba</b> Dünya");
    response.end();
});
server.listen(3000);
*/
/*Index Serve Etmek
const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
    response.writeHead(200,{'content-type' : 'text/html; charset=utf-8'});
    fs.readFile('index.html',(err,data) =>{
        if(err)
            throw err;
        response.end(data);
    })
});
server.listen(3000);
*/
/*Basit yönlendirme Yapısı
const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200,{'content-type' : 'text/html; charset=utf-8'});
    if(request.method === "GET")
    {
        if (request.url === '/')
            response.write("index sayfasındasınız");
        else if (request.url === '/iletisim')
            response.write("iletisim sayfasındasınız");
        else
            response.write("Böyle bir Sayfa Yok");
    }
    response.end();
});
server.listen(3000);
*/
