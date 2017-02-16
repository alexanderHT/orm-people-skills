var mongoose = require('mongoose')
var Schema = mongoose.Schema

var personSchema = Schema({
  name: String,
  skills: [{type: Schema.Types.ObjectId, ref: 'Skill'}]
}, {
  timestamps: true
})

var Person = mongoose.model('Person', personSchema)
