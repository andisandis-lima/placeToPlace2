const { Router } = require('express');
const express = require('express');
const router = express.Router(); //importando router do express

const jogosController = require('../controllers/jogosController');

router.get('/admPartida', jogosController.showAdm); 
router.delete('/jogo/:id', jogosController.delete);

//CRIAR - OK
router.get('/criarJogo', jogosController.showCriar);
router.post('/jogoCriado', jogosController.store);

//EDITAR - PUT erros
router.get('/editar', jogosController.edit);
router.get('/editarJogo', jogosController.update);
//router.get('/editarJogo/:id', jogosController.update);
//router.put('/editarJogo', jogosController.update);

//BUSCA - POST erros
router.get('/buscarJogos', jogosController.show); //criar filtro com metodo index
router.get('/procurarJogos', jogosController.search);

router.get('/', jogosController.showIndex);

router.post('/', jogosController.showIndex); // redirecionar o usuario após ter sido cadastrado ou recuperado a senha

router.get('/gerenPartida', jogosController.gerenciarPartida); 
router.get('/resultBusca', jogosController.resultBusca);
router.get('/resultJogoCriado', jogosController.resultJogoCriado); 


module.exports = router;