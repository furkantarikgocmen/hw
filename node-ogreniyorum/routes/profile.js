const express = require('express');
const router = express.Router();
const isLogin = require('../helper/isLogin');

router.get('/',isLogin,(req, res) => {
    res.send("Profil Sayfası")
});

module.exports = router;