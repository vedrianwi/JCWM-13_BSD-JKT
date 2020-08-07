const { asyncQuery, generateQuery } = require('../helpers/queryHelp')

module.exports = {
    getProfile : async (req, res) => {
        const id = parseInt(req.params.id)
        try {
            const query = `SELECT * FROM profile WHERE user_id = ${id}`
            const result = await asyncQuery(query)

            res.status(200).send(result[0])
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    editProfile : async (req, res) => {
        const id = parseInt(req.params.id)
        try {
            // check user
            const checkUser = `SELECT * FROM profile WHERE user_id = ${id}`
            const user = await asyncQuery(checkUser)

            if (user.length === 0) {
                return res.status(400).send('user doesn\'t exist.')
            }

            // edit
            const edit = `UPDATE profile SET ${generateQuery(req.body)} WHERE user_id = ${id}`
            const info = await asyncQuery(edit)

            res.status(200).send(info)
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    upload : async (req, res) => {
        const id = parseInt(req.params.id)

        console.log('file : ', req.file)
        // chek file, NOTE : req.file !== file
        if (req.file === undefined) {
            return res.status(400).send('no image.')
        }

        // save file path to database
        try {
            const img = `UPDATE profile SET image = 'images/${req.file.filename}' WHERE user_id = ${id}`
            const result = await asyncQuery(img)

            res.status(200).send(result)
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    }
}