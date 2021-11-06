const {Schema, model} = require('mongoose')

const subject = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  madeAt: {type: Date, default: Date.now()}
})

const Subject = model('Subject', subject)

module.exports = Subject
