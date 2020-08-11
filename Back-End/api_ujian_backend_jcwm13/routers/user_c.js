// import module
const router = require('express').Router()
const { vailidator, checkemail } = require('../helpers')

// import controller
const { user_c } = require('../controllers')

// define router
router.post('/register', vailidator, user_c.register)
router.post('/login', checkemail, user_c.login)
router.get('/active/:id', user_c.active)
router.get('/deactive/:id', user_c.deactive)
router.get('/close/:id', user_c.close)

// export router
module.exports = router