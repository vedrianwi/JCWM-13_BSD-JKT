let products = [
    {
        id : 1,
        name : 'nike-01',
        price : 20000
    },
    {
        id : 2,
        name : 'nike-03',
        price : 30000
    }
]

// export our controllers
module.exports = {
    getProducts : (req, res) => {
        res.status(200).send(products)
    },
    getProductsById : (req, res) => {
        const id = parseInt(req.params.id)
        res.status(200).send(products[id - 1])
    },
    addProduct : (req, res) => {
        console.log('body : ', req.body)

        // add new product
        const newProduct = {
            id : products.length + 1,
            name : req.body.name,
            price : req.body.price
        }
        products.push(newProduct)

        // sent response
        res.status(200).send(newProduct)
    },
    deleteProduct : (req, res) => {
        console.log('id : ', req.params.id)
        const id = parseInt(req.params.id)

        // delete products
        let ind = 0
        products.forEach((item, index) => {
            if (item.id === id) {
                ind = index
            }
        })
        
        products.splice(ind, 1)

        // send response
        res.status(200).send(`product with id : ${id} has been deleted.`)
    }
}
