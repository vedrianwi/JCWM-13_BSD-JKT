// import module
const router = require('express').Router()

// import controllers
const { product } = require('../controllers')

// create route
router.get('/', product.getProducts)
router.get('/:id', product.getProductsById)
router.post('/add', product.addProduct)
router.delete('/delete/:id', product.deleteProduct)

// export router
module.exports = router
