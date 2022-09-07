//better appraoach to integrate middleware is by applying "use"
const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res
//app.use(logger)                       //middleware applied to all the paths
//app.use('/api',logger)                //middleware applied to all the paths coming after /api only
//app.use([authorize, logger])          //middleware order matters i.e. first authorize then logger executes
app.use([logger, authorize])            //here logger middleware executes first and then authorize middleware
//app.use('/api',[authorize, logger])   //middlewares applied to all the paths coming after /api only

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
    res.send('Items Page')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})