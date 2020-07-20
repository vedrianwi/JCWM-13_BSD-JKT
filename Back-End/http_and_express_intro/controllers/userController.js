const { validationResult } = require('express-validator')
const { user } = require('.')

let users = [
    {
        id : 1,
        username : "admin",
        password : "admin",
        email : "admin@gmail.com",
        role : "admin"
    },
    {
        id : 2,
        username : "alee",
        password : "alee0510",
        email : "alee0510@gmail.com",
        role : "user"
    }
]

// export controllers
module.exports = {
    getAllUsers : (req, res) => {
        res.status(200).send(users)
    },
    getUserById : (req, res) => {
        console.log('id : ', req.params.id)
        const id = parseInt(req.params.id)

        // find index of id
        let indx = 0
        users.forEach((item, index) => {
            if (item.id === id) {
                indx = index
            }
        })

        // send respomse
        res.status(200).send(users[indx])
    },
    deleteUser : (req, res) => {
        console.log('id : ', req.params.id)
        const id = parseInt(req.params.id)

        // find index of id
        let indx = 0
        users.forEach((item, index) => {
            if (item.id === id) {
                indx = index
            }
        })
        users.splice(indx, 1)

        // send response
        res.status(200).send(`user with id : ${id} has been deleted.`)
    },
    register : (req, res) => {
        // // input validation
        // let error = {}

        // // check username
        // if (!String(req.body.username).trim()) {
        //     error.username = 'username is required.'
        // }

        // // check email
        // const email = /^[\-0-9a-zA-Z\.\+_]+@[\-0-9a-zA-Z\.\+_]+\.[a-zA-Z]{2,}$/
        // if (!email.test(String(req.body.email))) {
        //     error.email = 'email doesn\'t valid.'
        // }

        // // check password
        // const numb = /[0-9]/
        // const special = /[!@#$%^&*;]/
        // if (!numb.test(req.body.password) || !special.test(req.body.password)) {
        //     error.password = 'password must include number and special character.'
        // }

        // // check error
        // if (Object.keys(error).length !== 0) {
        //     return res.status(400).send(error)
        // }

        // check error input validation
        const errors =  validationResult(req)
        console.log(errors.errors)

        const msg = errors.array().map((item, index) => {
            return item.msg
        })
        console.log(msg)

        if (!errors.isEmpty()) {
            return res.status(422).send(msg)
        }

        // check if username or email is already exists
        const { username, email } = req.body
        let registerError = ''
        users.forEach(item => {
            if (item.username === username || item.email === email) {
                registerError = 'username or email is already exists.'
            }
        })

        if (registerError) {
            return res.status(400).send(registerError)
        }

        // add new user to database
        let newUser = {
            id : users.length + 1,
            username : req.body.username,
            password : req.body.password,
            email : req.body.email,
            role : 'user'
        }

        users.push(newUser)

        // send response
        res.status(200).send(newUser)
    },
    login : (req, res) => {
        console.log('body : ', req.body)
        const { username, password } = req.body

        // check username and password
        let loginIndex = null
        users.forEach((item, index) => {
            if (item.username === username && item.password === password) {
                loginIndex = index
            }
        })

        if (!loginIndex && loginIndex !== 0) {
            return res.status(400).send('username or password is invalid.')
        }

        // if ok
        res.status(200).send(users[loginIndex])
    },
    editUser : (req, res) => {
        console.log('params : ', req.params)
        console.log('body : ', req.body)
        const id = parseInt(req.params.id)

        // check index user with id
        let userIndex = null
        users.forEach((item, index) => {
            if (item.id === id) {
                userIndex = index 
            }
        })

        // check error
        if (!userIndex && userIndex !== 0) {
            return res.status(404).send(`user with id : ${id} not found.`)
        }

        // edit data user
        for (let key in req.body) {
            users[userIndex][key] = req.body[key]
        }

        // send respone
        res.status(200).send(`user data with id : ${id} has been updated.`)
    }
}