/*Template Literal
const name = "Furkan Tarık";
const surName = "Göçmen";
console.log(`My name is ${name} ${surName}`);
*/

/*Spread Operator
const ar1 = ['furkan','Tarık','Göçmen'];
const arr2 = [...ar1,6,8,1998];
console.log(arr2);
console.log(...arr2);
*/

/*Arrow Function
const fonksiyonum = (sayi)=>{
    return `Bu benim fonksiyonum ${sayi}`
}
console.log(fonksiyonum(1));
*/
/*Promise 1
const asenkronFonksyion = () =>{
    return new Promise((resolve, reject) =>{
        resolve(`Her Şey Yolunda`);

    })
};

asenkronFonksyion()
.then((data) =>{
    console.log(data);
    return `${data} döndürüldü`
})
.then((data2) =>{
    console.log(data2);
});
*/

/*Promise 2
const promise2fonksiyonum = (sayi) =>{
    return new Promise((resolve, reject) => {
        if(sayi%2 === 0)
        {
            resolve(`${sayi} Çifttir`);
        }
        else
            reject(`${sayi} Tektir`);
    })
};

promise2fonksiyonum(4)
.then((data) =>{
    console.log(data)
})
.catch((data) =>{
    console.log(data)
});
*/

/*ASYNC ve AWAIT
const user = {id : 1, name : 'Furkan'};
const friends = [{id : 2, name : 'Tarık'}, {id : 3, name : 'Göçmen'}];

const getUser = () =>{
    return new Promise(((resolve, reject) => {
        setTimeout(() =>{
            resolve(user);
        },1000)
    }))
};

const getFriends = (userId) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!userId)
                reject("ID Boş Olamaz");
            resolve(friends);
        },2000)
    })
};

async function asenkron() {
    try {
        const user = await getUser();
        console.log(user);
        //const friends = await getFriends(user.id); catch denemesi
        const friends = await getFriends();
        console.log(friends);
    }
    catch (e){
        console.log(e)
    }
}
asenkron();
*/

/*Paket Ekleme
const slugify = require('slugify');
const text= "Furkan Tarık Göçmen"
const slug = slugify(text,'_'); // some-string
console.log(slug);
*/
