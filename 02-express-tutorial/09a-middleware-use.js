//basic appraoach is to integrate middleware
const express = require('express')
const app = express()
const logger = require('./logger')

// req => middleware => res
app.get('/', logger, (req, res)=>{              //home page
    res.send('Home Page')
})
app.get('/about', logger, (req, res)=>{         //about page
    res.send('About Page')
})
app.get('/api/products', logger, (req, res)=>{  //products page
    res.send('Products Page')
})
app.get('/api/items', logger, (req, res)=>{     //items page
    res.send('Items Page')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})