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
    findAll() { 
        return db.users;  
      },
}

module.exports = Jogos