const http = require('http')
const { readFileSync } = require('fs')

//get all files here first
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req,res) => {
    console.log('User hit the server')
    const url = req.url
    console.log(url)

    // server with home page, about page, and error page
    if(url === '/'){                    // home page
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePage)
        res.end()   // this method signal server that all the response header/body have been sent
    }else if(url === '/about'){         // about page
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }else if(url === '/styles.css'){    // home page styles
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyles)
        res.end()
    }else if(url === '/logo.svg'){      // home page logo
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }else if(url === '/browser-app.js'){ // home page logic
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeLogic)
        res.end()
    }else{                              // 404 - error page
        res.writeHead(400, {'content-type': 'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end()
    }
})

server.listen(5000)