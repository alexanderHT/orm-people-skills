var express = require('express')
var router = express.Router()
const controllerPerson = require('../controllers/controller.person')

// http://localhost:3000/api/persons | GET | desc: get all data person with there skills
router.get('/', controllerPerson.getAllPersonAndSkill)
// http://localhost:3000/api/persons/register | POST | desc: add new person to database
router.post('/register', controllerPerson.createNewPerson)
// http://localhost:3000/api/persons | POST | desc: add new skill to the person
router.post('/addSkill', controllerPerson.addSkillToPerson)
// http://localhost:3000/api/persons | DELETE | desc: delete one person
router.delete('/', controllerPerson.deletePerson)

module.exports = router
