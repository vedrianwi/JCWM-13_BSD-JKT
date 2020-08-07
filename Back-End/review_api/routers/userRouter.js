const router = require('express').Router()

const { userController } = require('../controllers')
const { inputValidation } = require('../helpers/validator')

router.post('/register', inputValidation, userController.register)
router.get('/get', userController.getUsers)

module.exports = router