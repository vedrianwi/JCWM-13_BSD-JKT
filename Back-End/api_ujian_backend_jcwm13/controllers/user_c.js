// import module
const { validationResult } = require('express-validator')
const { querysync } = require('../helpers')

// export controller
module.exports = {
    register : async (req, res) => {
        console.log('body : ', req.body)
        const { username, email, password, cpassword} = req.body

        // check input validator result
        const validresult = validationResult(req)
        console.log('validation res : ', validresult)
        if (!validresult.isEmpty()) {
            res.status(400).send(validresult.array()[0].msg)
            return
        }

        // check password
        if (password !== cpassword) {
            res.status(400).send('password doesn\'t match.')
            return
        }

        try {
            // check username dan email => unique
            const checkuseremail = `SELECT id FROM users WHERE username = '${username}' OR email = '${email}'`
            const user = await querysync(checkuseremail)

            if (user.length !== 0) {
                res.status(400).send('username or email is already exists.')
                return
            }

            // add new user data
            const adduser = `INSERT INTO users (username, email, password, role, status) VALUES
                ('${username}', '${email}', '${password}', 'user', 1)`
            const result = await querysync(adduser)
            console.log('result : ', result)

            // res
            res.status(200).send('register success.')

        } catch(err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    login : async (req, res) => {
        console.log('body : ', req.body)
        const { user, password } = req.body

        // check username or email
        const isusername = validationResult(req)
        const userquery = isusername.isEmpty() ? `email = '${user}'` : `username = '${user}'`

        try {
            // check user and password
            const checkuser = `SELECT * FROM users WHERE ${userquery} AND password = '${password}'`
            const duser = await querysync(checkuser)
            if (duser.length === 0) {
                res.status(400).send('user or password is invalid.')
                return
            }

            // check status
            if (duser[0].status === 2) { // de-active
                res.status(400).send('user is no longer active.')
                return
            }

            if (duser[0].status === 3) { // closed
                res.status(400).send('this account has been closed.')
                return
            }

            // res
            res.status(200).send(duser[0])
            
        } catch(err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    deactive : async (req, res) => {
        const id = parseInt(req.params.id)
        try {
            // check user status
            const checkuser = `SELECT status FROM users WHERE id = ${id}`
            const user = await querysync(checkuser)
    
            if (user[0].status === 3) {
                res.status(400).send('action de-active is terminated beacause this account has been closed.')
                return
            }

            const dact = `UPDATE users SET status = 2 WHERE id = ${id}`
            const result = await querysync(dact)
            console.log('result : ', result)
            
            res.status(200).send('user has been de-active.')   
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    close : async (req, res) => {
        try {
            const clse = `UPDATE users SET status = 3 WHERE id = ${parseInt(req.params.id)}`
            const result = await querysync(clse)
            console.log('result : ', result)
            
            res.status(200).send('user has been closed.')   
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    active : async (req, res) => {
        const id = parseInt(req.params.id)
        try {
            // check user status
            const checkuser = `SELECT status FROM users WHERE id = ${id}`
            const user = await querysync(checkuser)

            if (user[0].status === 3) {
                res.status(400).send('action activate is terminated beacause this account has been closed.')
                return
            }

            // activate account
            const act = `UPDATE users SET status = 1 WHERE id = ${id}`
            const result = await querysync(act)
            console.log('result : ', result)

            // res
            res.status(200).send('account has been activated.')
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    }
}