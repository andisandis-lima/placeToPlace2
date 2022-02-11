const { Router } = require('express');
const express = require('express');
const router = express.Router(); //importando router do express

const jogosController = require('../controllers/jogosController');
const userController = require('../controllers/userController')

//ADM - DELETE erros
router.get('/admPartida', jogosController.showAdm); 
router.delete('/jogo/:id', jogosController.delete);

//CRIAR - OK
router.get('/criarJogo', jogosController.showCriar);
router.post('/criar', jogosController.store);

//EDITAR - PUT erros
router.get('/editarJogo', jogosController.edit)
router.get('/editarJogo/:id', jogosController.update);
router.put('/editarJogo', jogosController.update);

//BUSCA - POST erros
router.get('/buscarJogos', jogosController.show); //criar filtro com metodo index
router.get('/buscarJogos', jogosController.search);


router.get('/', jogosController.showIndex); 
router.get('/gerenPartida', jogosController.gerenciarPartida); 
router.get('/participantes', userController.partic)

module.exports = router;