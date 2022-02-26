const { check } = require('express-validator');

const jogoCriadoValidator = [
    check('data').notEmpty()
];

module.exports = jogoCriadoValidator;