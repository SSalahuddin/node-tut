const express = require('express')
const app = express()

const people = require('./13-router-people')
const auth = require('./14-router-auth')
     
app.use(express.static('./methods-public'))         // static assets
app.use(express.urlencoded({extended: false}))      // parse form data
app.use(express.json())                             // parse json                    

app.use('/api/people', people)
app.use('/login', auth)

app.listen(5000, ()=>{ console.log('Server listening on port 5000...') })