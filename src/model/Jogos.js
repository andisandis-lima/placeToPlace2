const fs = require('fs');
const { v4 } = require('uuid');

let db = require('../database/db.json'); //passando caminho para o arquivo json

const { uploadPath } = require('../config/upLoad');

const writeToDB = () => { //atualizando no banco de dados, pega o db da memoria e cria o
  //json armezenado na variavel writeToDB
  const json = JSON.stringify(db);
  fs.writeFileSync('src/database/db.json', json) 
  //await fs.promises.writeFile('src/database/db.json', json); //jeito assincrono
  //escrevendo no arquivo json, funcao com caminho como primeiro paramentro
};
const Jogos = {
    
  delete: (id) => {
    const jogosIndex = db.jogos.findIndex(jogo => jogo.id == id); //pega o indice do usuario 
    db.jogos.splice(jogosIndex, 1); //splice - deleta um elemento de um array nao sabendo a posicao
    //que esta, passa o indice e dele um elemento daquele indice, Indice vem a partir do
    //userIndex e apaga so um 1 elemento
    writeToDB(); // grava no json
  },

  create: (jogos, fotoLugar) => { //recebe o usuario e a imagem como parametro
    const novoJogo = { id: v4(), ...jogos, fotoLugar };
    db.jogos.push( novoJogo ); 
    writeToDB();
    return novoJogo
    },
  
   update: (id, jogos, fotoLugar) => {
    const jogoIndex = db.jogos.findIndex(jogo => jogo.id == id); 
    db.jogos[jogoIndex] = fotoLugar ? { id, ...jogos, fotoLugar } : { id, ...jogos };
    writeToDB();
  },

  removeFotos: async (id) => { 
    try {
      const jogoIndex = db.jogos.findIndex(jogo => jogo.id == id); //procurando
      await fs.promises.unlink( //manipulacao de arquivos com o filesystem (fs), unlink é para deletar um arquivo
            uploadPath + '/' + db.jogos[jogoIndex].fotoLugar //caminho da imagem contatenado com o nome da imagem
    );}
    catch(err) {
      console.log(err)
    }
  },

  findAll: () => { 
    return db.jogos; 
  },

  findById: (id) => {
    return db.jogos.find(jogo => jogo.id == id); 
  },

   filter: (bairro, cidade, estado, data, esporte) => {
     return db.jogos.filter(jogos => {
       if (bairro && jogos.bairro != bairro) { 
         return false
       };
       if (cidade && jogos.cidade != cidade) { 
        return false
      };
      if (estado && jogos.estado != estado) { 
        return false
      };
      if (data && jogos.data != data) { 
        return false
      };
      if (esporte && jogos.esporte != esporte) { 
        return false
      }

      return true 
     })
   }
}

module.exports = Jogos