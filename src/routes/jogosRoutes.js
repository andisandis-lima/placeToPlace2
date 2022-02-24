const { Router } = require('express');
const express = require('express');
const router = express.Router();
const multer = require('multer');

const { storage } = require('../config/upLoad'); //importando router do express

const jogosController = require('../controllers/jogosController');

const uploadSingle = multer({ storage });

router.get('/admPartida', jogosController.showAdm); 
router.delete('/jogo/:id', jogosController.delete);

//CRIAR - OK
router.get('/criarJogo', jogosController.showCriar);
router.post('/jogoCriado', uploadSingle.single('fotoLugar'), jogosController.store);

//EDITAR - PUT erros
router.get('/editarJogo/:id', jogosController.edit);
router.put('/editar/:id', uploadSingle.single('fotoLugar'), jogosController.update);

//BUSCA - POST erros
router.get('/buscarJogos', jogosController.show); //criar filtro com metodo index
router.get('/procurarJogos', jogosController.search);

router.get('/', jogosController.showIndex);

router.post('/', jogosController.showIndex); // redirecionar o usuario após ter sido cadastrado ou recuperado a senha

router.get('/gerenPartida', jogosController.gerenciarPartida); 

router.get('/resultadoJogoCriado', jogosController.resultJogoCriado);



module.exports = router;