var express = require('express')
var router = express.Router()
const controllerSkill = require('../controllers/controller.skill')

// http://localhost:3000/api/skills | GET | desc: get all data skill from database
router.get('/', controllerSkill.getAllSkillL)
// http://localhost:3000/api/seeder | GET | desc: add multipel skill to database
router.get('/seeder', controllerSkill.seederSkill)
// http://localhost:3000/api/skills | GET | desc: get one data skill from database
router.get('/:skillid', controllerSkill.getOneSkill)
// http://localhost:3000/api/skills | POST | desc: add one skill to database
router.post('/', controllerSkill.addOneSkill)
// http://localhost:3000/api/skills | PUT | desc: edit one skill from database
router.put('/', controllerSkill.editOneSkill)
// http://localhost:3000/api/skills | DELETE | desc: delete one skill from database
router.delete('/', controllerSkill.deleteOneSkill)

module.exports = router
