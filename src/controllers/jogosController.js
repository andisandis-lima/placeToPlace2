const Jogos = require('../model/Jogos');

const jogosController = {

    //ADM
    showAdm: (req, res) => {
      const jogo = Jogos.findAll()
      res.render("admPartida", { jogo });
    },

    delete(req, res) {
      const { id } = req.params; //pega o usuario
      Jogos.delete(id); // deleta o usuario
      res.redirect('admPartida', {jogo}); //redireciona
    },

    //CRIAR
    showCriar(req, res) {
      res.render('criarJogo')
    },

    store(req, res) { // Rota para criar um usuário
      const jogo = req.body; //pega o corpo da requisicao, onde está os dados do usuario (req.body)
      Jogos.create(jogo); //chamando o metodo da model passando o usuario como parametro
      //e o arquivo da imagem
      //res.redirect('/resultadoJogoCriado'); //redirecionando para tela desejada 
      res.render('resultadoJogoCriado',  { jogo } )
    },

    //EDITAR
      edit(req, res) {
        res.render('editarJogo')
      },

    async update(req, res) {
        const { id } = req.params; //pegando o id
        const jogo = req.body; //pegando o usuario
        Jogos.update(id, jogo); 
        res.redirect('/resultadoJogoCriado');
    },

    //BUSCAR
        show(req, res) {
          res.render('buscarJogos')
        },
        
        search(req, res) { //para pegar um user
        const { bairro, cidade, estado, data, esporte } = req.params; //pega id
        const jogo = Jogos.filter(bairro, cidade, estado, data, esporte); //procura
        res.render('buscarJogos', { jogo }); //renderiza e passa dados do user
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
}

module.exports = jogosController;