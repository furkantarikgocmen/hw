/*Okunabilir Stream
const fs = require('fs');
const file = 'video.mp4';
const readStream = fs.createReadStream(file);
let progress = 0;
fs.stat(file,(err,data) =>{
    const total = data.size;

    readStream.on('data',(chunk) =>{
        progress += chunk.length;
        console.log(Math.round((100 * progress)/total) + '%');
    });

    readStream.on('end',()=>{
        console.log('Veri Okuma Tamamlandı');
        console.log(`Veri Boyutu : ${total}`);
    });
});
*/

/*Yazılabilir Stram
const fs = require('fs');
const file = 'video.mp4';
const readStream = fs.createReadStream(file);
const writeStream = fs.createWriteStream('new.mp4');
fs.stat(file,(err,data) =>{
    const total = data.size;

    readStream.on('data',(chunk) =>{
    });

    readStream.pipe(writeStream);

    writeStream.on('finish',() =>{
        console.log('Yeni Dosya Oluşturuldu');
    })
});
*/