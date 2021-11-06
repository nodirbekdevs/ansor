const {Schema, model} = require('mongoose')

const course = new Schema({
  subject: {type: Schema.Types.ObjectId, ref: 'Subject', required: true},
  author: {type: Schema.Types.ObjectId, ref: 'Tutor', required: true},
  description: {type: String, required: true},
  price: {type: Number, default: 0},
  image: {type: String, default: ''},
  madeAt: {type: Date, default: Date.now()}
})

const Course = model('Course', course)

module.exports = Course
