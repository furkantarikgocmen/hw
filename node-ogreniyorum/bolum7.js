/*Event's & Event Emitter
const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('selamla', () => {
    console.log("Mrhaba Node.js");
});
eventEmitter.emit('selamla');
*/

/* FileName & DirName
--filename = bütün yolu(Dosya Adı DAhil);
--dirname = sadece yolu alır;
 */

/* Dosya Okuma
const fs = require('fs');
fs.readFile('dosya.txt', (error, data) => {
    if(error)
        console.log(error);
    console.log(data.toString());
});
*/

/* Dosyaya Ekleme ve Değiştirme ve Silme
const fs = require('fs');
fs.appendFile('dosya.txt','Bu metin append ile yazıldı',(err) => {
    if (err)
        throw err;
    console.log('Metin Eklendi');
    //Dosyaya ekleme yapar
});
fs.writeFile('dosya.txt','Bu metin write yazıldı ve değiştirildi',(err) => {
    if (err)
        throw err;
    console.log('Metin değiştirildi');
    //Dosyayı değiştirir
});
fs.unlink('dosya.txt',(err) =>{
   if(err)
       throw err;
   console.log("Dosya Silindi");
});
*/
