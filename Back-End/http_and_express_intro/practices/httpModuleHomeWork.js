// import http module
const http = require('http')
const fs = require('fs')


// create server
const server = http.createServer((req, res) => {
    console.log('URL : ', req.url)
    console.log('Method : ', req.method)

    // switch(req.url) {
    //     case '/' :
    //         res.writeHead(200, {'Content-type' : 'text/html'})
    //         res.write('<h1>Welcome to My APIs</h1>')
    //         res.end()
    //         break
    //     case '/home' :
    //         fs.readFile('pages/home.html', (err, file) => {
    //             if (err) {
    //                 res.writeHead(404, {'Content-type' : 'text/html'})
    //                 res.write('<h1>404 - File not found</h1>')
    //                 res.end() 
    //             } else {
    //                 res.writeHead(200, {'Content-type' : 'text/html'})
    //                 res.write(file.toString())
    //                 res.end()
    //             }
    //         })
    //         break
    //     case '/profile' :
    //         fs.readFile('pages/profile.html', (err, file) => {
    //             if (err) {
    //                 res.writeHead(404, {'Content-type' : 'text/html'})
    //                 res.write('<h1>404 - File not found</h1>')
    //                 res.end() 
    //             } else {
    //                 res.writeHead(200, {'Content-type' : 'text/html'})
    //                 res.write(file.toString())
    //                 res.end()
    //             }
    //         })
    //         break
    //     default :
    //         res.writeHead(404, {'Content-type' : 'text/html'})
    //         res.write('<h1>404 - Page not found</h1>')
    //         res.end()
    // }

    if (req.url === '/') {
        res.writeHead(200, {'Content-type' : 'text/html'})
        res.write('<h1>Welcome to My APIs</h1>')
        res.end()
    } else if (req.url === '/home') {
        try {
            res.writeHead(200, {'Content-type' : 'text/html'})
            const file = fs.readFileSync('pages/home.html')
            res.write(file.toString())
            res.end()
        } catch (err) {
            console.log(err)
            res.writeHead(404, {'Content-type' : 'text/html'})
            res.write('<h1>404 - File not found</h1>')
            res.end() 
        }
        // fs.readFile('pages/home.html', (err, file) => {
        //     if (err) {
        //         res.writeHead(404, {'Content-type' : 'text/html'})
        //         res.write('<h1>404 - File not found</h1>')
        //         res.end() 
        //     } else {
        //         res.writeHead(200, {'Content-type' : 'text/html'})
        //         res.write(file.toString())
        //         res.end()
        //     }
        // })
    } else if (req.url === '/profile' && req.method === 'GET') {  
        fs.readFile('pages/profile.html', (err, file) => {
            if (err) {
                res.writeHead(404, {'Content-type' : 'text/html'})
                res.write('<h1>404 - File not found</h1>')
                res.end() 
            } else {
                res.writeHead(200, {'Content-type' : 'text/html'})
                res.write(file.toString())
                res.end()
            }
        })
    } else if (req.url === '/profile' && req.method === 'POST') {
        let body = []
        req.on('data', chunk => body.push(chunk))
        req.on('end', () => {
            body = Buffer.concat(body).toString()
            console.log('data from user : ', body)
            res.writeHead(200, {'Content-type' : 'application/json'})
            res.write(body)
            res.end()
        })
    } else {
        res.writeHead(404, {'Content-type' : 'text/html'})
        res.write('<h1>404 - Page not found</h1>')
        res.end() 
    }
})

// bind to port
const PORT = 2000
server.listen(PORT, () => `Server running at port ${PORT}`)
