const { querysync } = require('../helpers')

module.exports = {
    getProducts : async (req, res) => {
        // check query params
        const query = req.query
        console.log('query : ', req.query)
        
        // check sort query
        let sort = ''
        if (query._sort) {
            sort += `ORDER BY ${query._sort} ${ query._order ? query._order.toUpperCase() : 'ASC'}`
            console.log('sort query : ', sort)
        }
        
        // check filter query
        let filter = '' 
        const querykey = Object.keys(query)
        if (querykey.length && !query._sort) {
            filter += 'WHERE '
            // check kategory
            filter += querykey[0] === 'kategori' 
            ? `k.kategori = '${query[querykey[0]]}'`
            : `${querykey[0]} = '${query[querykey[0]]}'`

            console.log('filter : ', filter)
        }

        try {
            const get = `SELECT p.id, p.nama_produk, p.deskripsi, p.harga, p.stok,
                        group_concat(distinct k.kategori order by k.id separator ',') kategori
                        FROM produk p
                        JOIN pro_kat pk ON p.id = pk.produk_id
                        JOIN kategori k ON k.id = pk.kategori_id
                        ${filter}
                        GROUP BY p.id 
                        ${sort};`
            const products = await querysync(get)

            res.status(300).send(products)
        } catch (err) {
            res.status(500).send(err)
        }
    },
    getProductById : async (req, res) => {
        try {
            const get = `SELECT p.id, p.nama_produk, p.deskripsi, p.harga, p.stok,
                        group_concat(distinct k.kategori order by k.id separator ',') kategori
                        FROM produk p
                        JOIN pro_kat pk ON p.id = pk.produk_id
                        JOIN kategori k ON k.id = pk.kategori_id
                        WHERE p.id = ${parseInt(req.params.id)}
                        GROUP BY p.id;`
            const product = await querysync(get)

            res.status(300).send(product)
        } catch (err) {
            res.status(500).send(err)
        }
    },
    pagination : async (req, res) => {
        console.log('params : ', req.params)
        const limit = parseInt(req.params.limit)
        const page = parseInt(req.params.page)

        try {    
            const offest = limit * page - limit
            console.log('offset : ', offest)

            // get data
            const get = `SELECT p.id, p.nama_produk, p.deskripsi, p.harga, p.stok,
            group_concat(distinct k.kategori order by k.id separator ',') kategori
            FROM produk p
            JOIN pro_kat pk ON p.id = pk.produk_id
            JOIN kategori k ON k.id = pk.kategori_id
            GROUP BY p.id
            LIMIT ${limit} OFFSET ${offest}`
            const product = await querysync(get)

            res.status(300).send(product)
        } catch (err) {
            res.status(500).send(err)
        }
    }
}