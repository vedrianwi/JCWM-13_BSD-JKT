// import module
// import http from 'http'
const http = require('http') // provides useful functions and classes to build an HTTP server
const fs = require('fs') // file system module => read, write, make file, etc... in our storage

// create server
const server = http.createServer((request, response) => {
    // console.log(request)
    console.log("headers : ", request.headers) // get headers from user
    console.log("method : ", request.method) // request medthod from users
    console.log("url : ", request.url) // url request dari user

    const URL = request.url

    // create response if user connect our server
    // response.statusCode = 200 // status code 200 ok
    // response.setHeader("Content-type", "text/plain") // bikin header
    // response.write("Wellcome to my APIs") // isi response
    // response.end() // mengakhiri config response dan send data to client

    // servering atau send different data type
    // text/plain, text/html, application/json
    // if (request.url == '/') { // home
    //     response.statusCode = 200
    //     response.setHeader("Content-type", "text/plain")
    //     response.write("Wellcome to my APIs")
    //     response.end()
    // } else if (request.url == '/html') {
    //     response.writeHead(200, {"Content-type" : "text/html"})
    //     response.write("<h1>Hello, this is from my APIs</h1>")
    //     response.end()
    // } else if (request.url == '/data') {
    //     response.writeHead(200, {"Content-type" : "application/json"})

    //     // pepare json data
    //     let data = {
    //         name : "alee",
    //         age : 19,
    //         hobby : "dance"
    //     }

    //     response.write(JSON.stringify(data))
    //     response.end()
    // } else {
    //     response.writeHead(404, {"Content-type" : "text/html"})
    //     response.write("<h1>404 - Page Not Found.</h1>")
    //     response.end()
    // }

    // serving html file
    // fs.readFile(`pages/${URL.substring(1)}.html`, (error, file) => {
    //     if (error) {
    //         response.writeHead(404, {"Content-type" : "text/html"})
    //         response.write("<h1>404 - File not found.</h1>")
    //         response.end()
    //     } else {
    //         response.writeHead(200, {"Content-type" : "text/html"})
    //         response.write(file.toString())
    //         response.end()
    //     }
    // })

    // handle request POST, PUT, or PACTH => get data from user/client
    let body = []
    request.on("data", chunk => {
        console.log(chunk)
        body.push(chunk)
    })
    request.on("end", () => {
        body = Buffer.concat(body).toString()
        console.log(body)
        
        // give response to client
        response.writeHead(200, {"Content-type" : "text/plain"})
        // response.write("data has been accepted.")
        response.write(body)
        response.end()
    })


    // problem
    // if (URL == '/admin/profile' && request.method == 'POST') {

    // }

})

// host our sever to localhost
const PORT = 2000
server.listen(PORT, error => {
    if (error) {
        console.log(error)
    }
    console.log(`Server is running at PORT ${PORT}`)
})

// NOTE : callback function => function sbg input di function lain