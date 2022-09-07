const express = require('express')
const router = express.Router()

const {
    getPeople,
    createPerson,
    createPersonPostman,
    UpdatePerson,
    DeletePerson
} = require('./15-router-controller')

//router.get('/', getPeople)
//router.post('/', createPerson)
router.route('/').get(getPeople).post(createPerson)
//router.post('/postman', createPersonPostman)
router.route('/postman').post(createPersonPostman)
//router.put('/:id', UpdatePerson)
//router.delete('/:id', DeletePerson)
router.route('/:id').put(UpdatePerson).delete(DeletePerson)

module.exports = router