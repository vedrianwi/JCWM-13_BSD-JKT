// import module
const Express = require('express')
const BodyParser = require('body-parser')
const Cors = require('cors')

// define our server or app
const App = Express()

// apply middleware
App.use(Cors())
App.use(BodyParser.json())

// create home route
const greeting = (req, res) => res.status(200).send('<h1>Wellcome to my APIs</h1>')
App.get('/', greeting)

// connect all router
const { productRouter, userRouter } = require('./routers')
const bodyParser = require('body-parser')
App.use('/product', productRouter)
App.use('/user', userRouter)

// host in localhost
const PORT = 2000
App.listen(PORT, () => `Server is running at PORT ${PORT}`)