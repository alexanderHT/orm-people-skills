const modelPerson = require('../models/model.person')

var controllerPerson = {
  createNewPerson: function (req, res) {
    // create obj person
    var newPerson = modelPerson({
      name: req.body.name,
      bio: req.body.bio
    })

    // save to database
    newPerson.save(function (err, data) {
      if (err) throw err
      res.json(data)
    })
  },
  getAllPersonAndSkill: function (req, res) {
    modelPerson
      .find({})
      .populate('skills.skill')
      .exec(function (err, data) {
        if (err) return handleError(err)
        // else console.log(JSON.stringify(data, true, 2))
        res.json(data)
      })
  },
  addSkillToPerson: function (req, res) {
    // find user and check all skill id
    modelPerson
      .findOne({ name: req.body.name })
      .populate('skills.skill')
      .exec(function (err, data) {
        if (err) return handleError(err)
        var tmpSkills = []
        // data.skills[i].skill._id
        // add skill to array variable call tmpSkills
        for (var i = 0; i < data.skills.length; i++) {
          tmpSkills[tmpSkills.length] = String(data.skills[i].skill._id)
        }
        // validation to check skill of that person, if not have that skill it will bi add new skill
        if (tmpSkills.indexOf(req.body.skillid) == -1) {
          modelPerson.findOneAndUpdate(
            { name: req.body.name},
            { $push: {
                'skills': { skill: req.body.skillid, score: req.body.score }
              }
            },
            {safe: true, upsert: true, new: true},
            function (err, data) {
              if (err) throw err
              res.json(data)
            }
          )
        // if data skill already have it will give respone skill already have
        }else {
          console.log('skill already have')
          res.json('skill already have')
        }
      })
  },
  deletePerson: function (req, res) {
    modelPerson.findOneAndRemove({ _id: req.body.personid }, function (err, data) {
      if (err) throw err
      res.json(data)
    })
  }
}

module.exports = controllerPerson
