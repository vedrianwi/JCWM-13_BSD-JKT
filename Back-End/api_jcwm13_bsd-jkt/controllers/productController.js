const { generateQuery, asyncQuery } = require('../helpers/queryHelp')

module.exports = {
    // getProducts : (req, res) => {
    //     const getData = 'SELECT * FROM products'
    //     database.query(getData, (err, result) => {
    //         if (err) {
    //             return res.status(500).send(err)
    //         }

    //         res.status(200).send(result)
    //     })
    // },
    // getProducts : (req, res) => {
    //     const getData = 'SELECT * FROM products'
    //     asyncQuery(getData)
    //     .then(result => {
    //         asyncQuery()
    //         .then()
    //     })
    //     .catch(err => res.status(500).send(err))
    // },
    getProducts : async (req, res) => {
        const getData = 'SELECT * FROM products'
        try {
            const result = await asyncQuery(getData)
            // console.log(result)
            res.status(200).send(result)
        } catch (err) {
            res.status(500).send(err)
        }
    },
    getProductById : async (req, res) => {
        const getDataById = `SELECT * FROM products WHERE id=${parseInt(req.params.id)}`
        try {
            const result = await asyncQuery(getDataById)
            res.status(200).send(result[0])
        } catch (err) {
            res.status(500).send(err)
        }
    },
    editProduct : async (req, res) => {
        const id = parseInt(req.params.id)
        try {
            // check if product with id exist in our database
            const checkProduct = `SELECT * FROM products WHERE id=${id}`
            const check = await asyncQuery(checkProduct)
            if (check.length === 0) return res.status(400).send('product doesn\'t exist.')

            // edit product
            const edit = `UPDATE products SET ${generateQuery(req.body)} WHERE id=${id}`
            const result =  await asyncQuery(edit)

            // send response
            res.status(200).send(result)

        } catch (err) {
            res.status(500).send(err)
        }
    },
    delete : async (req, res) => {
        const id = parseInt(req.params.id)
        try {
            // check if product with id exist in our database
            const checkProduct = `SELECT * FROM products WHERE id=${id}`
            const check = await asyncQuery(checkProduct)
            if (check.length === 0) return res.status(400).send('product doesn\'t exist.')

            // delete product
            const del = `DELETE FROM products WHERE id=${id}`
            const result = await asyncQuery(del)

            // send response
            res.status(200).send(result)
        } catch (err) {
            res.status(500).send(err)
        }
    },
    add : async (req, res) => {
        console.log('body : ', req.body)
        const { name, price, stock } = req.body
        try {
            const insert = `INSERT INTO products (name, price, stock)
                            VALUES ('${name}', ${price}, ${stock})` 
            const result =  await asyncQuery(insert)

            res.status(200).send(result)
        } catch (err) {
            res.status(500).send(err)
        }
    }
}