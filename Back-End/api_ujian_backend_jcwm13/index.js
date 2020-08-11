// import module
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const env = require('dotenv')

// setup express
const app = express()

// config dotenv
env.config()

// connect database
const dbconnection = require('./database')
dbconnection.connect((err) => {
    if (err) {
        console.log(err.message)
    }

    console.log('database is connected at id : ', dbconnection.threadId)
})

// setup middleware
app.use(bodyparser.json()) // result => req.body
app.use(cors()) // allow cross origin resource sharing

// home router
app.get('/', (req, res) => {
    res.status(200).send('<h1>Wellcome to MyAPIs.</h1>')
})

// apply router
const { prokat_r, user_r } = require('./routers')
app.use('/api/produk-kategori/', prokat_r)
app.use('/api/user/', user_r)

// bind our api to host : http://localhost:PORT/
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`server is running at port ${PORT}.`))
