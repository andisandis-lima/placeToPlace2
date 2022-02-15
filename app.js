const express = require('express');
const methodOverride = require('method-override');

// app initialization
const app = express();

app.set('view engine', 'ejs');

app.set('views', './src/views');

app.use(express.static(__dirname + '/public'));

app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/', require('./src/routes/jogosRoutes'))
app.use('/', require('./src/routes/userRoutes'))

app.use((req,res, next) => {
    res.status(404).render('notFound')
});

app.listen(3000, () => { 
    console.log('Server rodando na porta 3000')
})      