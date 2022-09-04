//http module functions
const http = require('http')

//create a server that receives a request and responds with a result 
const server = http.createServer((req, res) => {
    //console.log(req)
    //res.write('Welcome to our home page')
    //res.end()
    //if(req.url === '/'){
    //    res.end('Welcome to our home page')
    //}
    //if(req.url === '/about'){
    //    res.end('Here is our short history')
    //}
    //res.end(`
    //    <h1>Oops!</h1>
    //    <p>We can't seem to find the page you are looking for</p>
    //    <a href="/">back home</a>
    //`)
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    else if(req.url === '/about'){
        res.end('Here is our short history')
    }
    else{
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>
        `)
    }
})

//server is listening for reqests
server.listen(5000)