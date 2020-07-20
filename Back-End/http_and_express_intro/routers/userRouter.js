// import module
const router = require('express').Router()
const { body } = require('express-validator')

// import controller
const { user } = require('../controllers')

// input validation
const registerValidation =  [
    body('username')
        .notEmpty()
        .withMessage('username is required.')
        .isLength({ min : 6})
        .withMessage('username min 6 char.'),
    body('email', 'email doesn\'t valid.')
        .isEmail(),
    body('password')
        .matches(/[!@#$%^&*;]/)
        .withMessage('password must include special char.')
        .matches(/[0-9]/)
        .withMessage('password must include number.')
        .isLength({ min : 6 })
        .withMessage('password min 6 char.')
]

// create route
router.get('/', user.getAllUsers)
router.get('/:id', user.getUserById)
router.delete('/delete/:id', user.deleteUser)
router.post('/register', registerValidation, user.register)
router.post('/login', user.login)
router.patch('/edit/:id', user.editUser)

// export
module.exports = router