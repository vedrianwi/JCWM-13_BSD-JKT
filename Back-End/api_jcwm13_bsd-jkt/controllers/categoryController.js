const database = require('../database')
const { generateQuery } = require('../helpers/queryHelp')

module.exports = {
    getCategory : (req, res) => {
        const query = `SELECT * FROM categories`
        database.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err)
            }

            res.status(200).send(result)
        })
    },
    addCategory : (req, res) => {
        console.log('body : ', req.body)
        const { category } = req.body

        // check parentId
        const parentId = req.body.parentId ? req.body.parentId : null

        const query = `INSERT INTO categories (category, parent_id) 
                    VALUES (${database.escape(category)}, ${database.escape(parentId)})`
        database.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err)
            }

            res.status(200).send(result)
        })
    },
    getCategoryDetails : (req, res) => {
        const query = `SELECT c2.id, c2.category, c1.category as parent 
                    FROM categories c1
                    RIGHT JOIN categories c2 ON c1.id = c2.parent_id`
        database.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err)
            }

            res.status(200).send(result)
        })
    },
    getCategoryDetailsById : (req, res) => {
        const id = parseInt(req.params.id)
        const query = `SELECT c1.id, c1.category, c2.category as child 
                    FROM categories c1
                    JOIN categories c2
                    ON c1.id = c2.parent_id
                    WHERE c1.id = ${id}`
        database.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err)
            }

            res.status(200).send(result)
        })
    },
    delete : (req, res) => {
        const id = parseInt(req.params.id)
        
        const del = `DELETE FROM categories WHERE id = ${id}`
        database.query(del, (err, result) => {
            if (err) {
                return res.status(500).send(err)
            }

            res.status(200).send(result)
        })
    },
    // get data with query parameters
    getCategoryByQuery : (req, res) => {
        console.log('query : ', req.query)
        const { category, child } = req.query

        const query = `SELECT c1.id, c1.category, c2.category as child, c2.id as child_id
                    FROM categories c1
                    JOIN categories c2
                    ON c1.id = c2.parent_id
                    HAVING c1.category = ${database.escape(category)} OR c1.id = ${database.escape(child)}`
        console.log(query)
        database.query(query, (err, result) => {
            if(err) {
                res.status(500).send(err)
            }

            res.status(200).send(result)
        })
    },
    getLeafNodes : (req, res) => {
        const query = `SELECT c1.id, c1.category FROM categories c1
                    LEFT JOIN categories c2 ON c1.id = c2.parent_id
                    WHERE c2.id IS NULL`
        database.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err)
            }

            res.status(200).send(result)
        })
    },
    editCategory : (req, res) => {
        const id = parseInt(req.params.id)

        const edit = `UPDATE categories SET ${generateQuery(req.body)} WHERE id = ${id}`
        console.log(edit)
        database.query(edit, (err, result) => {
            if (err) {
                return res.status(500).send(err)
            }

            res.status(200).send(result)
        })
    }
}