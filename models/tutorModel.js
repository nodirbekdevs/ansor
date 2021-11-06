const {Schema, model} = require('mongoose')

const tutor = new Schema({
  subject: {type: Schema.Types.ObjectId, ref: 'Subject', required: true},
  name: {type: String, required: true},
  phone: {type: String, default: ''},
  address: {type: String, default: ''},
  description: {type: String, required: true},
  image: {type: String, default: ''},
  joinedAt: {type: Date, default: Date.now()}
})

const Tutor = model('Tutor', tutor)

module.exports = Tutor
