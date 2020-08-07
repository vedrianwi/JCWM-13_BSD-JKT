const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const app = express()
dotenv.config()

app.use(cors())
app.use(bodyparser.json())

// setup & connect mongo db
mongoose.connect(process.env.MONGO_DB, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, 
    (err) => {
    if (err) {
        console.log(err)
        return
    }

    console.log('connected to MONGO_DB.')
})

// home route
app.get('/', (req, res) => {
    res.status(200).send('<h1>Wellcome to MyAPIs</h1>')
})

// create schema or database rules
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now,
        required : true
    }
})

// create model
const User = mongoose.model('Users', userSchema)

// register
app.post('/register', (req, res) => {
    // create new user
    const newuser = new User({
        username : req.body.username,
        email : req.body.email,
        password : req.body.password
    })

    // save database => add data to mongodb
    newuser.save()
    .then(result => {
        console.log(result)
        res.status(200).send(result)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
})

// login
app.post('/login', (req, res) => {
    // find data
    User.find({ username : req.body.username })
    .then(result => {
        console.log(result)

        if (result[0].password !== req.body.password) {
            res.status(400).send('invalid password.')
            return
        }

        res.status(200).send(result[0])
    })
    .catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
})

// get all data user
app.get('/users', (req, res) => {
    User.find()
    .then(result => {
        res.status(200).send(result)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
})

// get user by id
app.get('/users/:id', (req, res) => {
    User.findById(req.params.id)
    .then(result => {
        res.status(200).send(result)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
})

// delete data
app.delete('/users/delete/:id', (req, res) => {
    User.deleteOne({ _id : req.params.id })
    .then(result => {
        res.status(200).send(result)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
})

// update or edit data
app.patch('/users/update/:id', (req, res) => {
    User.updateOne({ _id : req.params.id }, { username : req.body.username })
    .then(result => {
        res.status(200).send(result)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
})

app.listen(2000, () => console.log('server is running at port 2000.'))