const { check, validationResult, body } = require('express-validator');

const criarJogoValidator = [
    check('cep')
        .notEmpty().withMessage('O campo CEP deve ser preenchido'),
    check('endereco') 
        .notEmpty().withMessage('O campo Endereço deve ser preenchido'),
    check('numero')
        .notEmpty().withMessage('O campo Número deve ser preenchido'),
    check('bairro')
        .notEmpty().withMessage('O campo Endereço deve ser preenchido'),
    check('estado')
        .notEmpty().withMessage('O campo Estado deve ser preenchido'),
    check('cidade')
        .notEmpty().withMessage('O campo Cidade deve ser preenchido'),
    check('data')
        .notEmpty().withMessage('O campo Data deve ser preenchido'),
    check('hora')
        .notEmpty().withMessage('O campo Horário deve ser preenchido'),
    check('esporte')
        .notEmpty().withMessage('O campo Esporte deve ser preenchido')
];


module.exports = criarJogoValidator