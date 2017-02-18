var mongoose = require('mongoose')
var Schema = mongoose.Schema

var personSchema = Schema({
  name: String,
  bio: String,
  skills: [{
    skill: {type: Schema.Types.ObjectId, ref: 'Skill'},
    score: Number
  }]
}, {
  timestamps: true
})

var Person = mongoose.model('Person', personSchema)

module.exports = Person
