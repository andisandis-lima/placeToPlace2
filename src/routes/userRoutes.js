const { Router } = require('express');
const express = require('express');
const router = express.Router(); //importando router do express

const userController = require('../controllers/userController');

router.get('/participantes', userController.partic);

module.exports = router;
