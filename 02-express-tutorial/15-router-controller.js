//router.get('/', )
//router.post('/', )
//router.post('/postman', )
//router.put('/:id', )
//router.delete('/:id', )

let { people } = require('./data') 

const getPeople = (req, res)=>{ res.status(200).json({success: true, data: people}) }

const createPerson = (req, res)=>{
    const {name} = req.body
    if(!name){ return res.status(400).json({success: false, msg:'Please provide name value!'}) }
    else{ return res.status(201).json({success: true, person: name}) }    
}

const createPersonPostman = (req, res) => {
    const {name} = req.body
    if(!name){ return res.status(400).json({success: false, msg:'Please provide name value!'}) }
    else{ return res.status(201).json({success: true, data: [...people, name]}) }
}

const UpdatePerson = (req, res)=>{
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person)=> person.id === Number(id))
    if(!person){ return res.status(404).json({success: false, msg: `Person with id ${id} does not exists!`}) }
    const newPeople = people.map((person) => {
        if(person.id === Number(id)){ person.name = name }
        return person
    })
    return res.status(201).json({success: true, data: newPeople})
}

const DeletePerson = (req, res)=>{
    const person = people.find((person)=> person.id === Number(req.params.id))
    if(!person){
        return res.status(404).json({success: false, msg: `Person with id ${req.params.id} does not exists!`})
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(201).json({success: true, data: newPeople})
}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    UpdatePerson,
    DeletePerson
}