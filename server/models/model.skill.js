var mongoose = require('mongoose')
var Schema = mongoose.Schema

var skillSchema = Schema({
  name: String,
  description: String
}, {
  timestamps: true
})

var Skill = mongoose.model('Skill', skillSchema)
