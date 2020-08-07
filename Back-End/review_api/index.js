// import semua module
const express = require('express') // framework RESTAPI
// menghandle request body dari user : data (raw data) => hasilnya => req.body
const bodyParser = require('body-parser') 
const cors = require('cors') // allow cross origin resources sharing
const dotenv = require('dotenv') // api bisa baca file .env => environment variable

// setup express
const app = express()
dotenv.config() // initialize dotenv
const db = require('./database')

// setup middleware
// middleware => software yang bekerja sbg penengah
app.use(bodyParser.json())
app.use(cors())

// connect to database
db.connect((err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(`DB is connected as id : ${db.threadId}`)
})

// get data from database
app.get('/api/users', (req, res) => {
    // do SQL query
    const query = 'SELECT * FROM users'
    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send(err)
            return
        }

        res.status(200).send(result)
    })
})

// home route
app.get('/', (req, res) => {
    res.status(200).send('<h1>Hello RESTAPIs</h1>')
})

// apply router
const { testRouter, userRouter } = require('./routers')
app.use('/api', testRouter)
app.use('/api/user', userRouter)

// binding / host di computer local
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`server is running at port : ${PORT}.`))

// NOTES
// for (let i = 0; i < 10; i++) {
//     // do...
// }