const express = require('express');
const router = express.Router();

router.get('/signin',(req,res) =>{
    res.send("signin sayfası");
});

router.post('/signin',(req,res) =>{
    res.send("signin sayfası");
});
//Isteğe göre get & post func çalışır

module.exports = router;