const router = require('express').Router()

// import controller
const { prokat_c } = require('../controllers')

// define router
router.patch('/update/:id', prokat_c.update)

// export router
module.exports = router