// import database
const CryptoJS = require('crypto-js')
const { validationResult } = require('express-validator')
const database = require('../database')
const { generateQuery, asyncQuery } = require('../helpers/queryHelp')
const { createToken } = require('../helpers/jwt')
const transporter = require('../helpers/nodemailer')

const SECRET_KEY = process.env.SECRET_KEY

module.exports = {
    getUserData : (req, res) => {
        // get data from mysql
        const query = 'SELECT * FROM users'
        database.query(query, (err, result) => {
            // check error
            if (err) {
                return res.status(500).send('Internal Server Error')
            }

            // if query success
            res.status(200).send(result)
        })
    },
    login : (req, res) => {
        console.log('body : ', req.body)
        const { username, password } = req.body

        // check user in our database
        const query = `SELECT * FROM users WHERE username = '${username}'`
        database.query(query, (err, result) => {
            // check error
            if (err) {
                return res.status(500).send(err)
            }

            // check password : password form user vs password form database
            const hashpass = CryptoJS.HmacMD5(password, SECRET_KEY)
            if (hashpass.toString() !== result[0].password) {
                return res.status(400).send('invalid password.')
            }

            // filter data
            delete result[0].password

            // create user token
            const token = createToken({ id : result[0].user_id, username : result[0].username })
            console.log('token : ', token)

            // include token in result
            result[0].token = token

            // if query success
            res.status(200).send(result[0])
        })
    },
    register : async (req, res) => {
        console.log('body : ', req.body)
        const { username, email, password, confpassword } = req.body
        
        // validate user input
        const errors = validationResult(req)
        console.log(errors)
        if (!errors.isEmpty()) {
            return res.status(422).send(errors.array()[0].msg)
        }

        // check password
        if (password !== confpassword) {
            return res.status(400).send('password doesn\'t match.')
        }

        // insert new user to database
        try {
            // check user
            const checkUser = `SELECT * FROM users WHERE username='${username}' OR email='${email}'`
            const user = await asyncQuery(checkUser)

            // check result
            if (user.length > 0) {
                return res.status(400).send('username or email is already used.')
            }

            // encypt password before insert into database
            const hashpass = CryptoJS.HmacMD5(password, SECRET_KEY)

            // query insert new account to database
            const insertUser = `INSERT INTO users (username, password, email, role, status) 
                                        values ('${username}', '${hashpass.toString()}', '${email}', 'user', 0)`
            const newUser = await asyncQuery(insertUser)
            const new_userId = newUser.insertId

            // insert new profile
            const insertProfile = `INSERT INTO profile (user_id) values (${new_userId})`
            const newProfile = await asyncQuery(insertProfile)

            // create token
            const token = createToken({ id : new_userId, username : username })

            // sent email verification to user
            const option = {
                from : `admin <ali.muksin0510@gmail.com>`,
                to : 'ali.sakra94@gmail.com',
                subject : 'Email verification',
                text : '',
                html : `
                    <h3>Click link below to verified your account</h3>
                    <a href="http://localhost:3000/verification?${token}">http://localhost:3000/verification?${token}</a>`
            }

            const info = await transporter.sendMail(option)
            res.status(200).send(info.response)

        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
        // database.query(checkUser, (err, result) => {
        //     if (err) {
        //         console.log(err)
        //         return res.status(500).send(err)
        //     }

        //     // check result
        //     if (result.length > 0) {
        //         return res.status(400).send('username or email is already used.')
        //     }

        //     // encypt password before insert into database
        //     const hashpass = CryptoJS.HmacMD5(password, SECRET_KEY)

        //     // query insert new account to database
        //     const query = `INSERT INTO users (username, password, email, role, status) 
        //                     values ('${username}', '${hashpass.toString()}', '${email}', 'user', 0)`
        //     database.query(query, (err2, result2) => {
        //         if (err2) {
        //             console.log(err2)
        //             return res.status(500).send(err2)
        //         }

        //         const new_userId = result2.insertId
                
        //         // insert new profile to database
        //         const query2 = `INSERT INTO profile (user_id) values (${new_userId})`
        //         database.query(query2, (err3, result3) => {
        //             if (err3) {
        //                 console.log(err3)
        //                 return res.status(500).send(err3)
        //             }

        //             // create token
        //             const token = createToken({ id : new_userId, username : username })

        //             // sent email verification to user
        //             const option = {
        //                 from : `admin <ali.muksin0510@gmail.com>`,
        //                 to : 'ali.sakra94@gmail.com',
        //                 subject : 'Email verification',
        //                 text : '',
        //                 html : `
        //                     <h3>Click link below to verified your account</h3>
        //                     <a href="http://localhost:3000/verification?${token}">http://localhost:3000/verification?${token}</a>`
        //             }

        //             transporter.sendMail(option, (err4, info) => {
        //                 if (err4) {
        //                     console.log(err4)
        //                     return res.status(500).send(err4)
        //                 }

        //                 res.status(200).send(info.response)
        //             })

        //         })
        //     })
        // })
    },
    delete : (req, res) => {
        console.log('params : ', req.params)
        console.log('body : ', req.body)
        const id = parseInt(req.params.id)
        const { password } = req.body

        // check if user with id is exist in our database
        const checkId = `SELECT * FROM users WHERE user_id=${id}`
        database.query(checkId, (err, result) => {
            if (err) {
                return res.status(500).send(err)
            }

            // check result
            if (result.length === 0) {
                return res.status(200).send(`user with id : ${id} doens't exists.`)
            }

            // check password
            const hashpass = CryptoJS.HmacMD5(password, SECRET_KEY)
            if (hashpass.toString() !== result[0].password) {
                return res.status(400).send('invalid password.')
            }

            // if user exist in our database
            const delAccount = `DELETE FROM users WHERE user_id=${id}`
            database.query(delAccount, (err2, result2) => {
                if (err2) {
                    return res.status(500).send(err2)
                }

                res.status(200).send(result2)
            })
        })
    },
    edit : (req, res) => {
        console.log('params : ', req.params)
        console.log('body : ', req.body)
        const id = parseInt(req.params.id)

        // check user with id
        const checkId = `SELECT * FROM users WHERE user_id=${id}`
        database.query(checkId, (err, result) => {
            if (err) {
                return res.status(500).send(err)
            }

            // check result
            if (result.length === 0) {
                return res.status(200).send(`user with id : ${id} doens't exists.`)
            }

            // edit data user di database
            const editQuery = `UPDATE users SET ${generateQuery(req.body)} WHERE user_id=${id}`
            console.log(editQuery)

            database.query(editQuery, (err2, result2) => {
                if (err2) {
                    return res.status(500).send(err2)
                }

                // sent response to user
                res.status(200).send(result2)
            })
        })
    },
    editPass : (req, res) => {
        console.log('params : ', req.params)
        console.log('body : ', req.body)
        const id = parseInt(req.params.id)
        const { oldpass, newpass, confpass } = req.body

        if (newpass !== confpass) {
            return res.status(400).send('password doesn\'t match.')
        }

        // check new password requirement
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).send({ errors : errors.array() })
        }

        // check password
        const checkPass = `SELECT password FROM users WHERE user_id=${id}`
        database.query(checkPass, (err, result) => {
            if (err) {
                return res.status(500).send(err)
            }

            const hasholdpass = CryptoJS.HmacMD5(oldpass, SECRET_KEY)
            if (hasholdpass.toString() !== result[0].password) {
                return res.status(400).send('invalid password.')
            }

            // update password
            const hashpass = CryptoJS.HmacMD5(newpass, SECRET_KEY)
            const updatePass = `UPDATE users SET password='${hashpass}' WHERE user_id=${id}`
            database.query(updatePass, (err2, result2) => {
                if (err2) {
                    res.status(500).send(err2)
                }

                res.status(200).send(result2)
            })
        })

    },
    keeplogin : async (req, res) => {
        console.log('user : ', req.user)
        try {
            // query to get user's data
            const query = `SELECT user_id, username, email, role 
                        FROM users 
                        WHERE user_id=${req.user.id} AND username='${req.user.username}'`
            const result = await asyncQuery(query)
            // console.log('result : ', result)

            res.status(200).send(result[0])
        } catch (err) {
            res.status(500).send(err)
        }
    },
    emailverification : async (req, res) => {
        console.log('user : ', req.user)
        try {
            // change status user in database
            const query = `UPDATE users SET status = 1 WHERE user_id = ${req.user.id} AND username = '${req.user.username}'`
            const result = await asyncQuery(query)
            console.log(result)

            res.status(200).send('email has been verified.')
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    }
}