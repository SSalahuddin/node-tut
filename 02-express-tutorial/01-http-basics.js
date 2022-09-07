const http = require('http')

const server = http.createServer((req,res) => {
    console.log('User hit the server')
    const url = req.url

    // server with home page, about page, and error page
    if(url === '/'){            // home page
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>Home Page</h1>')
        res.end()   // this method signal server that all the response header/body have been sent
    }else if(url === '/about'){ // about page
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }else{                      // error page
        res.writeHead(400, {'content-type': 'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end()
    }
})

server.listen(5000)