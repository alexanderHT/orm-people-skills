var mongoose = require('mongoose')
var Schema = mongoose.Schema

var skillSchema = Schema({
  name: String,
  score: Number
}, {
  timestamps: true
})

var Skill = mongoose.model('Skill', skillSchema)
