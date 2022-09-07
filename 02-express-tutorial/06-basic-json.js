const express = require('express')
const app = express()

const { products } = require('./data')
app.get('/', (req, res)=>{
    //res.json() can be null
    //res.json({user: 'Sumayyea', id: 1}) can send user and its id
    //res.status(500).json({error: 'Page is temporarily down'}) can send error and its status
    res.json(products)
})

app.listen(5000, ()=>{
    console.log('Server is listening in port 5000...')
})