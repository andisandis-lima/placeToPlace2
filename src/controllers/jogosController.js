const Jogos = require('../model/Jogos');

const jogosController = { 
  //ADM
  showAdm: (req, res) => {
      const jogos = Jogos.findAll();
      console.log(req.query)
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
  //CRIAR
  showCriar: (req, res) => {
    const jogos = Jogos.findAll();
    res.render('criarJogo', { jogos });
  },

  store:(req, res, next) => { // Rota para criar um usuário
    const jogos = req.body; //pega o corpo da requisicao, onde está os dados do usuario (req.body)
    const fotoLugar = req.file ? req.file.filename : undefined;
    Jogos.create(jogos, fotoLugar);
    //res.redirect('/resultadoJogoCriado'); //redirecionando para tela desejada 
    req.session.jogos = jogos;
    res.redirect('resultadoJogoCriado');
  },
  //EDITAR
  edit:(req, res) => {
    res.render('editarJogo');
    const { id } = req.params;
    Jogos.findById(id);
      //pegar id do jogo, dar um findOne pra pegar jogo, e depois passar pra view
  },

  update: (req, res) => {
    const { id } = req.params; //pegando o id
    const jogos = req.body; //pegando o usuario
    Jogos.update(id, jogos);   
    res.render('resultadoJogoCriado');
  },
  //BUSCAR
  show:(req, res) => {
    res.render('buscarJogos');
  },
        
  search:(req, res) => { //para pegar um user
    const { bairro, cidade, estado, data, esporte } = req.query; //pega id
    console.log(req.query);
    const jogos = Jogos.filter(bairro, cidade, estado, data, esporte); //procura
    res.render('resultadoBusca', { jogos }); //renderiza e passa dados do user
  },

  //rotas exemplos
  resultJogoCriado: (req, res) => {
    const jogos = req.session.jogos
    res.render("resultadoJogoCriado");
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