const { body } = require('express-validator')

module.exports = {
    inputValidation : [
        body('username')
        .notEmpty()
        .withMessage('username is required.')
        .isLength({ min : 6 })
        .withMessage('username must be min 6 characters.'),
        body('email')
        .notEmpty()
        .withMessage('email is required.')
        .isEmail()
        .withMessage('email doesn\'t valid.'),
        body('password')
        .notEmpty()
        .withMessage('password is required.')
        .matches(/[0-9]/)
        .withMessage('passowrd must include number.')
        .matches(/[!@#$%^&*;]/)
        .withMessage('password must include special character.')
    ]
}