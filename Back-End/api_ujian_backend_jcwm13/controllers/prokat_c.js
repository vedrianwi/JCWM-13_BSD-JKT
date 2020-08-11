// import querysync
const { querysync } = require('../helpers')

// export module
module.exports = {
    update : async (req, res) => {
        const id = parseInt(req.params.id)
        const nkategori_id = req.body.kategori_id
        console.log('id : ', id)
        console.log('body : ', req.body)

        try {
            // delete previus produk_kategori
            const delprev = `DELETE FROM pro_kat WHERE produk_id = ${id}`
            const delres = await querysync(delprev)
            console.log('delete result : ', delres)

            // add new produk_kategori data
            const getnkategori_id = `WITH RECURSIVE category_path (id, kategori, parent_id) AS
                (
                    SELECT id, kategori, parent_id
                        FROM kategori
                        WHERE id = ${nkategori_id}
                    UNION ALL
                    SELECT c.id, c.kategori, c.parent_id
                        FROM category_path AS cp JOIN kategori AS c
                        ON cp.parent_id = c.id
                )
                SELECT id FROM category_path;`
            const n_id = await querysync(getnkategori_id)
            console.log('new id : ', n_id)

            // update data
            let values = ''
            n_id.forEach(item => {
                values += `(${id}, ${item.id}),`
            })
            const add_prokat = `INSERT INTO pro_kat (produk_id, kategori_id) VALUES ${values.slice(0, -1)}`
            console.log('query : ', add_prokat)
            const nprokat = await querysync(add_prokat)
            console.log('new prokat : ', nprokat)

            // res
            res.status(200).send('product has been updated')

        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    }
}