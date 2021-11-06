const {Schema, model} = require('mongoose')

const communication = new Schema({
  name: {type: String, required: true},
  phone: {type: String, default: ''},
  madeAt: {type: Date, default: Date.now()}
})

const Communication = model('Communication', communication)

module.exports = Communication
