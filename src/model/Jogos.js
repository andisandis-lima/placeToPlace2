const fs = require('fs');
const { v4 } = require('uuid');

let db = require('../database/db.json'); //passando caminho para o arquivo json

const writeToDB = () => { //atualizando no banco de dados, pega o db da memoria e cria o
  //json armezenado na variavel writeToDB
  const json = JSON.stringify(db);
  fs.writeFileSync('src/database/db.json', json)
  //await fs.promises.writeFile('src/database/db.json', json); //jeito assincrono
  //escrevendo no arquivo json, funcao com caminho como primeiro paramentro
};
const Jogos = {
    
  delete(id) {
    const jogoIndex = db.jogos.findIndex(jogo => jogo.id == id); //pega o indice do usuario 
    db.jogos.splice(jogoIndex, 1); //splice - deleta um elemento de um array nao sabendo a posicao
    //que esta, passa o indice e dele um elemento daquele indice, Indice vem a partir do
    //userIndex e apaga so um 1 elemento
    writeToDB(); // grava no json
  },

  create(jogo) { //recebe o usuario e a imagem como parametro
    const novoJogo = { id: v4(), ...jogo };
    db.jogos.push( novoJogo ); //da o push com a informacoes novas para o 
    //db.users, depois cria uma id atraves do v4 e pega todas as informacoes do novo usuartios
    //atraves no spread junto com a imagem

    writeToDB();
    return novoJogo
    },
  
   update(id, jogo) {
    const jogoIndex = db.jogos.findIndex(jogo => jogo.id == id); //pega o indice do usu'ario 
    //atualizado
    db.jogos[jogoIndex] = { id, ...jogo };
    writeToDB();
  },


  findAll() { 
    return db.jogos; //retornando o banco de dados 
  },

  findById(id) {
    return db.jogos.find(jogo => jogo.id == id); 
  },

   filter(bairro, cidade, estado, data, esporte) {
     return db.jogos.filter(jogo => {
       if (bairro && jogo.bairro != bairro) { 
         return false
       };
       if (cidade && jogo.cidade != cidade) { 
        return false
      };
      if (estado && jogo.estado != estado) { 
        return false
      };
      if (data && jogo.data != data) { 
        return false
      };
      if (esporte && jogo.esporte != esporte) { 
        return false
      }

      return true 
     })
   }
}

module.exports = Jogos