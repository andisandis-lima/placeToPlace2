const Jogos = require('../model/Jogos');

const { check, validationResult, body } = require('express-validator');

const jogosController = { 
  //ADM
  showAdm: (req, res) => {
      const jogos = Jogos.findAll();
      res.render("admPartida", { jogos });
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params; //pega o usuario
      await Jogos.removeFotos(id);
      Jogos.delete(id); // deleta o usuario
      res.redirect('/admPartida')
    } 
    catch(err) {
          console.log(err)
    }
  },
   //EDITAR
   edit:(req, res) => {
    const { id } = req.params;
    const jogos = Jogos.findById(id);
    
    res.render('editarJogo', {jogos})

  },

  update: (req, res) => {
    const { id } = req.params; 
    const jogos = req.body; 
    const fotoLugar = req.file ? req.file.filename : undefined;
    Jogos.update(id, jogos, fotoLugar);   
    req.session.jogos = jogos;
    res.redirect(`/resultadoJogoCriado/${id}`);
  },
  //CRIAR
  showCriar: (req, res) => {
      const jogos = Jogos.findAll();
      res.render('criarJogo', { jogos });
  
  },

  store:(req, res) => { // Rota para criar um usuário
    let errors = validationResult(req);
    if(errors.isEmpty()) {
      const jogos = req.body; //pega o corpo da requisicao, onde está os dados do usuario (req.body)
      const fotoLugar = req.file ? req.file.filename : undefined;
      const create = Jogos.create(jogos, fotoLugar);
      res.redirect(`resultadoJogoCriado/${create.id}`);
    } else {
      res.render('criarJogo', { errors: errors.mapped(), old: req.body });
      
    };
  },
 
  //BUSCAR
  show:(req, res) => {
    res.render('buscarJogos');
  },
        
  search:(req, res) => { //para pegar um user
    const { bairro, cidade, estado, data, esporte } = req.query; //pega id
    const jogos = Jogos.filter(bairro, cidade, estado, data, esporte); //procura
    res.render('resultadoBusca', { jogos }); //renderiza e passa dados do user
  },

  //rotas exemplos
  resultJogoCriado: (req, res) => {
    const { id } = req.params;
    const jogos = Jogos.findById(id);
    res.render("resultadoJogoCriado", { jogos });
  },
  //INDEX
  showIndex: (req, res) => {
    res.render('index');
  },
  //GERENCIAR PARTIDA
  gerenciarPartida: (req, res) => {
    res.render("gerenParticipantes");
  },
}

module.exports = jogosController;