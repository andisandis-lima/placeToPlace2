const { Router } = require('express');
const express = require('express');
const router = express.Router();
const multer = require('multer');

const { storage } = require('../config/upLoad'); 
const jogosController = require('../controllers/jogosController');
const criarJogoValidator = require('../middleware/validators/criarJogoValidator');

const uploadSingle = multer({ storage });

router.get('/admPartida', jogosController.showAdm);
router.delete('/jogo/:id', jogosController.delete);

router.get('/criarJogo', jogosController.showCriar);
router.post('/jogoCriado', criarJogoValidator, uploadSingle.single('fotoLugar') ,jogosController.store);

router.get('/editarJogo/:id', jogosController.edit);
router.put('/editar/:id', uploadSingle.single('fotoLugar'), jogosController.update);

router.get('/buscarJogos', jogosController.show);
router.get('/procurarJogos', jogosController.search);
 
router.get('/', jogosController.showIndex);

router.post('/', jogosController.showIndex); 

router.get('/gerenPartida', jogosController.gerenciarPartida);

router.get('/resultadoJogoCriado/:id', jogosController.resultJogoCriado);



module.exports = router;