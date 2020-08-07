// import module
const router = require('express').Router()

// import controllers
const { testController } = require('../controllers')

// create express router
router.get('/test', testController.text)

// request params => parameter => info / data tambahan di url * /:nama_param
router.get('/params/:id', testController.testParams)
router.get('/pagination/:total/:halaman', testController.testParams)

// request query => nama query defined by client / user => di url * ?nama_query=value
router.get('/get', testController.testQuery)

// handle request body
router.post('/body', testController.handleBody)

// export router
module.exports = router