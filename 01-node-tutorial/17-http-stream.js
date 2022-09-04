var http = require('http')
var fs = require('fs')

//content length is 1.8m, too big, not optimized approach
/*http.createServer(function (req, res) {
    const text = fs.readFileSync('./content/big.txt', 'utf-8')
    res.end(text)
}).listen(5000)*/

//better approach is to use streams, optimized approach
http.createServer(function(req,res){
    const filestream = fs.createReadStream('./content/big.txt', 'utf-8')
    filestream.on('open', () => { filestream.pipe(res) })
    filestream.on('error', (err) => { res.end(err) })
}).listen(5000)