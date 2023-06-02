const express = require('express');
const router = express.Router();
const { getCharById } = require('../controllers/getCharById');
const login = require('../controllers/login');
const postUser = require('../controllers/postUser');
const postFav = require('../models/postFav');
const deleteFav = require('../models/deteleFav');

router.get('/character/:id', (req,res)=>{getCharById(req,res)});
router.post('/user', postUser);
router.get('/login', login);
router.post('/login', login);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router;