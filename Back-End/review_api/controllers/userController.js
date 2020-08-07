const { validationResult } = require('express-validator')
const { promisfyQuery } = require('../helpers/promsfyQuery')
const db = require('../database')
const { query } = require('express')

module.exports = {
    register : (req, res) => {
        // check input
        const inputvalid = validationResult(req)
        // console.log('input validation : ', inputvalid)
        
        // get error message
        if (!inputvalid.isEmpty()) {
            const msg = inputvalid.array().map(item => item.msg)
            console.log('err msg : ', msg)
            res.status(400).send(msg)
            return
        }

        res.status(200).send('valid.')
    },
    // getUsers : (req, res) => {
    //     const get = 'SELECT * FROM users'
    //     promisfyQuery(get)
    //     .then(result => {
    //         console.log(result)
    //         res.status(200).send(result)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //         res.status(500).send(err)
    //     })
    // }
    getUsers : async (req, res) => {
        try {
            const get = 'SELECT * FROM users'
            const users = await promisfyQuery(get)

            // second quer
            // const result 2 = await promisfyQuery(query)
            // ...

            res.status(200).send(users)

        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    }
}