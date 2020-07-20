// import module
const express = require('express')
const Cors = require('cors')
const bodyParser = require('body-parser')

// define app or create server
const app = express()

// apply middleware
app.use(Cors())
app.use(bodyParser.json())

// define route or address => for response
app.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome to my APIs</h1>')
})

app.get('/home', (req, res) => {
    res.status(200).send('Home page')
})

// send html file
app.get('/html_file', (req, res) => {
    res.status(200).sendFile('pages/home.html', { root : __dirname })
})

// request parameter => info tambahan di address => /angka
app.get('/home/:id', (req, res) => {
    console.log('params : ', req.params)
    console.log('id : ', req.params.id)
    res.status(200).send('ok')
})

// multiple params
app.get('/data/:month/:year', (req, res) => {
    console.log('params : ', req.params)
    console.log(req.params.month)
    console.log(req.params.year)
    res.status(200).send('oke')
})

// request query => ? => searching
app.get('/data', (req, res) => {
    console.log(req.query)
    res.status(200).send('done.')
})


// handle user POST
app.post('/data', (req, res) => {
    // get user data post from req.body
    console.log('body : ', req.body)
    res.status(200).send('data accepted.')
})

// handle GET, POST, PACTH/PUT, DELETE
let products = [
    {
        id : 1,
        name : 'nike-01',
        price : 20000
    },
    {
        id : 2,
        name : 'nike-03',
        price : 30000
    }
]

// get data => all data and single data
app.get('/products', (req, res) => {
    console.log('query : ', req.query)
    const query = req.query
    if(Object.keys(req.query).length !== 0) {
        console.log('query is not empty.')
        const data = products.filter(item => item.name === req.query.name)

        // send response
        return res.status(200).send(data)
    }

    res.status(200).send(products)
})

app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.status(200).send(products[id - 1])
})


// post data
app.post('/products', (req, res) => {
    console.log('body : ', req.body)

    products.push({
        id : products.length + 1,
        name : req.body.name,
        price : req.body.price
    })

    res.status(200).send(products)
})

// edit data
// PUT
app.put('/products/:id', (req, res) => {
    console.log('params : ', req.params)
    console.log('body : ', req.body)

    const id = parseInt(req.params.id)
    console.log(id)

    // edit product data
    products[id - 1] = req.body

    // send response to client
    res.status(200).send(products)
})

// PATCH
app.patch('/products/:id', (req, res) => {
    console.log('body : ', req.body)
    console.log('id : ', req.params.id)
    const id = parseInt(req.params.id)

    // patch data
    for (let key in req.body) {
        console.log(key)
        products[id - 1][key] = req.body[key]
    }

    res.status(200).send(products[id - 1])
})

// DELETE
app.delete('/products/:id', (req, res) => {
    console.log('id : ', req.params.id)
    const id = parseInt(req.params.id)

    // delete
    products.splice(id - 1, 1)

    // send response
    res.status(200).send(products)
})


// host in localhost
const PORT = 2000
app.listen(PORT, () => `Server is running at port ${PORT}`)