const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize2')   //check authorize2.js for further understanding

// req => middleware => res
// middleware => own vs express vs third-party
//1. own: app.get('/api/items', [logger, authorize],(req, res)=>{...})
//2a. express: app.use([logger, authorize])         
//2b. express: app.use(express.static('./navbar-app'))
//3. third-party: morgan npm
app.use(morgan('tiny'))

app.get('/', (req, res)=>{              //home page
    res.send('Home Page')
})
app.get('/about', (req, res)=>{         //about page
    res.send('About Page')
})
app.get('/api/products', (req, res)=>{  //products page
    res.send('Products Page')
})
app.get('/api/items', (req, res)=>{     //items page
    console.log(req.user)
    res.send('Items Page')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})