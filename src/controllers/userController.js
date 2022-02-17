const User = require('../model/User');

const userController = {
        //PARTICIPANTES
        partic: (req,res) => {
            const user = User.findAll()
            res.render("participantes", { user })            
          },
        retiraUser: (req,res) => {
          res.send("ok")  
          }
        }

module.exports = userController;