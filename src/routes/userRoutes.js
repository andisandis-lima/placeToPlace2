const { Router } = require('express');
const express = require('express');
const router = express.Router(); //importando router do express

const userController = require('../controllers/userController');

router.get('/participantes', userController.partic);

router.get('/retiraUser', userController.retiraUser)

router.get ('/register', userController.inicio);

router.post ('/register/code', userController.code);

router.post ('/profile', userController.perfilregistro);

router.get ('/error', userController.erro);

module.exports = router;
