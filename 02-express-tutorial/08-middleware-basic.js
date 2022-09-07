const express = require('express')
const app = express()

// req => middleware => res
const logger = (req, res, next)=>{
    const method = req.method               // Get
    const url = req.url                     // /
    const time = new Date().getFullYear()   // 2022
    console.log(method, url, time)
    next()
}

app.get('/', logger, (req,res)=>{
    res.send('Home Page')
})
app.get('/about', logger, (req,res)=>{
    res.send('About Page')
})

app.listen(5000, ()=>{
    console.log('Server is lisening on port 5000...')
})