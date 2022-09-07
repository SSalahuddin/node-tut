const express = require('express')
const app = express()
let { people } = require('./data')      //read the person data in json format

//parse form data using built-in express middleware i.e. urlencoded
//this will be used in app.post for login data in 3
app.use(express.urlencoded({extended: false}))

//parse json data coming from using built-in express middleware i.e. json
//this will be used in app.post for login data in 4
app.use(express.json())

//1. SETUP static webpage and middleware
//THIS SETS UP the localhost:5000 or / or homepage
//no need of get function for / or homepage
app.use(express.static('./methods-public'))

//2. READ/GET the person data in json format using get() and show it
app.get('/api/people', (req, res)=>{
    res.status(200).json({success: true, data: people})
})

//3. SEND the data via post()
//SET UP the localhost:5000/login page needed once the data is posted from homepage
app.post('/login', (req, res)=>{
    //res.send('Posted!')
    //console.log(req.body)    // [Object: null prototype] { name: 'john' }
    const {name} = req.body
    if(name){
        return res.status(200).send(`<h1>Welcome ${name}</h1>`)
    }else{
        return res.status(401).send('<h1>Please provide correct credentials!<h1>')
    }
})

//4. SEND the person data via post()
//SET UP the localhost:5000/api/people page needed once the data is posted from homepage (Javascript)
app.post('/api/people', (req, res)=>{
    //res.status(201).send('Success!')
    const {name} = req.body
    if(!name){
        return res.status(400).json({success: false, msg:'Please provide name value!'})
    }else{
        return res.status(201).json({success: true, person: name})
    }    
})

//5. SEND people data via post()
//SET UP the localhost:5000/api/postman/people page needed once the data is posted from homepage (Javascript)
app.post('/api/postman/people', (req, res) => {
    const {name} = req.body
    if(!name){
        return res.status(400).json({success: false, msg:'Please provide name value!'})
    }
    else{
        return res.status(201).json({success: true, data: [...people, name]})
    }
})

// 6. UPDATE data via put()
app.put('/api/people/:id', (req, res)=>{
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person)=> person.id === Number(id))
    if(!person){
        return res.status(404).json({success: false, msg: `Person with id ${id} does not exists!`})
    }
    const newPeople = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    return res.status(201).json({success: true, data: newPeople})
})

// 6. DELETE data via delete()
app.delete('/api/people/:id', (req, res)=>{
    const person = people.find((person)=> person.id === Number(req.params.id))
    if(!person){
        return res.status(404).json({success: false, msg: `Person with id ${req.params.id} does not exists!`})
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(201).json({success: true, data: newPeople})
})

//listen
app.listen(5000, ()=>{
    console.log('Server listening on port 5000...')
})