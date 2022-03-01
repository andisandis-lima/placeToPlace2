const { check, validationResult, body } = require('express-validator');

const criarJogoValidator = [
    check('cep')
        .notEmpty().withMessage('O campo CEP deve ser preenchido')
        .isLength({max: 10}).withMessage('Numero do CEP exceceu limite de caracteres'),
    check('endereco')
        .notEmpty().withMessage('O campo Endereço deve ser preenchido').bail(),
    check('numero')
        .isLength({max: 5}).withMessage('Numero exceceu limite de caracteres')
        .isInt().withMessage('Somente numeros'),
    check('bairro')
        .notEmpty().withMessage('O campo Endereço deve ser preenchido'),
    check('estado')
        .notEmpty().withMessage('O campo Estado deve ser preenchido')
        .isLength({max: 2}).withMessage('Somente a abreviação. Exemplo: SP, Rj, BA ...'),
    check('cidade')
        .notEmpty().withMessage('O campo Cidade deve ser preenchido'),
    check('data')
        .notEmpty().withMessage('O campo Data deve ser preenchido'),
    check('horario')
        .notEmpty().withMessage('O campo Horário deve ser preenchido'),
    check('esporte')
        .notEmpty().withMessage('O campo Esporte deve ser preenchido.Exemplo: Basquete, Volêi ...')
];


module.exports = criarJogoValidator