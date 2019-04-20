const express = require('express');
const router = express.Router();

//Models
const Book = require('../models/Book.js');

router.get('/new', function(req, res, next) {
    const book = new Book({
        title: 'ü',
        published: true,
        comments: [
            {message: "Harika bir kitap"},
            {message: "kağıt israfı"}
        ],
        meta: {
            votes: 12,
            favs : 102
        }
    });

    book.save((error, data) => {
       if (error){
           console.log(error);
           res.send(error)
       }

       res.json(data);
    });
    //res.send('respond with a resource');
});

router.get('/search', (req, res) => {
   Book.find({title: 'PHP', published: true}, 'title comments', (err, data) => {
       res.json(data);
   })
});

router.get('/searchOne', (req, res) => {
   Book.findOne({title: 'Udemy'}, (err, data) => {
       res.json(data);
   })
});

router.get('/searchById', (req, res) => {
    Book.findById('5cba14850903e84190e9ba31', (err, data) => {
        res.json(data);
    })
});

router.get('/update', (req, res) => {
    Book.update(
        {
            published: false
        },
        {
            published: true,
            title: 'deneme Title'
        },
        {
            //multi: true
            upsert: true
        },
        (err, data) => {
        res.json(data);
        //router.get yerine router.put da olabilir!
    })
});

router.get('/updateById', (req, res) => {
    Book.findByIdAndUpdate(
        '5cba0cf42f6b4a3cdcac5233',
        {
            title: 'hello world',
            'meta.favs': 99
        },
        (err, data) => {
        res.json(data);
    })
});

router.get('/remove', (req, res) => {
    Book.remove({title: 'PHP'}, (err, data) => {
       res.json(data);
    });
});

router.get('/sort', (req, res) => {
    Book.find({}, (err, data) => {
        res.json(data);
    }).sort({ 'meta.favs': 1 }); // -1 büyükten küçüğe / title de aynı şekilde a-z sıralar
});

router.get('/limitandskip', (req, res) => {
    Book.find({}, (err, data) => {
        res.json(data);
    })
    .skip(2) //2.kayıttan sonra
    .limit(1) //1 adet göster
});


module.exports = router;
