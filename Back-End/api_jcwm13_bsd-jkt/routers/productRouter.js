const router = require('express').Router()

const { productController } = require('../controllers')

router.get('/products', productController.getProducts)
router.get('/products/:id', productController.getProductById)
router.patch('/products/edit/:id', productController.editProduct)
router.delete('/products/delete/:id', productController.delete)
router.post('/products/add', productController.add)

module.exports = router