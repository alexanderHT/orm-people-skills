var modelSkill = require('../models/model.skill')

var controllerSkill = {
  getAllSkillL: function (req, res) {
    modelSkill.find({}, function (err, data) {
      if (err) throw err
      res.json(data)
    })
  },
  getOneSkill: function (req, res) {
    modelSkill.findOne({ _id: req.params.skillid }, function (err, data) {
      if (err) throw err
      res.json(data)
    })
  },
  addOneSkill: function (req, res) {
    // create obj from mode skill
    var newSkill = new modelSkill({
      name: req.body.name,
      description: req.body.description
    })

    // save to database
    newSkill.save(function (err, data) {
      if (err) throw err
      res.json(data)
    })
  },
  editOneSkill: function (req, res) {
    modelSkill.findOneAndUpdate(
      { _id: req.body.skillid },
      { name: req.body.name, description: req.body.description },
      {new: true},
      function (err, data) {
        if (err) throw err
        res.json(data)
      })
  },
  deleteOneSkill: function (req, res) {
    modelSkill.findOneAndRemove({ _id: req.body.skillid }, function (err, data) {
      if (err) throw err
      res.json(data)
    })
  }
}

module.exports = controllerSkill
