const express = require('express');
const { path } = require('express/lib/application');
const router = express.Router();
const app = express();
const methodOverride = require('method-override');

app.set('view engine', 'ejs');

app.set('views', './src/views'); //definindo local das views

app.use(express.static('public')); //definindo local do css

app.use(express.urlencoded({ extended: false}));
app.use(express.json());//configuracao para o POST

app.use('/', require('./src/routes/routes'))

app.use((req,res, next) => {
    res.status(404).render('notFound')
});

app.use(methodOverride('_method'));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

app.listen(3000, () => { 
    console.log('Server rodando na porta 3000')
 })                                                                                                                                     

 module.exports = router;                                                                                                                                       