const User = require('../model/User');

const userController = {
        //PARTICIPANTES
        partic: (req,res) => {
            const user = User.findAll()
            res.render("participantes", { user })            
          },
        retiraUser: (req,res) => {
          res.send("ok")  
          },
          inicio: (req, res) => {
            return res.render('cadastro')
          },
        code: (req, res) => {
            return res.render('codigo')
          },
        perfilregistro: (req, res) => {
            return res.render ('perfilRegistro')
          },
        erro: (req, res) => {
            return res.render ('notFound')
          }
        }

module.exports = userController;