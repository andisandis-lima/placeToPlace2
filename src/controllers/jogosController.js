const Jogos = require('../model/Jogos');

const jogosController = {

    //ADM
    showAdm: (req, res) => {
      const jogo = Jogos.findAll();
      res.render("admPartida", { jogo });
    },

    delete: async (req, res) => {
      try {
        const { id } = req.params; //pega o usuario
        await Jogos.removeFotos(id);
        Jogos.delete(id); // deleta o usuario
        const jogo = Jogos.findAll();

        req.session.jogo = jogo;
        res.redirect("admPartida", jogo)
        //res.render('admPartida', { jogo }); //redireciona
      } 
      catch(err) {
        console.log(err)
      }
    },

    //CRIAR
    showCriar: (req, res) => {
      const jogo = Jogos.findAll();
      res.render('criarJogo', { jogo });
    },

    store:(req, res, next) => { // Rota para criar um usuário
      const jogo = req.body; //pega o corpo da requisicao, onde está os dados do usuario (req.body)
      const fotoLugar = req.file ? req.file.filename : undefined;
      Jogos.create(jogo, fotoLugar);
      //res.redirect('/resultadoJogoCriado'); //redirecionando para tela desejada 
      req.session.jogo = jogo;
      res.redirect('resultadoJogoCriado');
    },

    //EDITAR
      edit:(req, res) => {
        res.render('editarJogo');
      },

      update: (req, res) => {
        const { id } = req.params; //pegando o id
        const jogo = req.body; //pegando o usuario
        Jogos.update(id, jogo);   
        res.render('resultadoJogoCriado');
    },

    //BUSCAR
        show:(req, res) => {
          res.render('buscarJogos');
        },
        
        search:(req, res) => { //para pegar um user
          const { bairro, cidade, estado, data, esporte } = req.params; //pega id
          const jogo = Jogos.filter(bairro, cidade, estado, data, esporte); //procura
          res.render('resultadoBusca', { jogo }); //renderiza e passa dados do user
        },

    //rotas exemplos

    //INDEX
    showIndex: (req, res) => {
        res.render('index');
    },

    //GERENCIAR PARTIDA
    gerenciarPartida: (req, res) => {
        res.render("gerenParticipantes");
    },

    resultJogoCriado: (req, res) => {
      const jogo = req.session.jogo
      res.render("resultadoJogoCriado");
  }
}

module.exports = jogosController;