const {Schema, model} = require('mongoose')

const user = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  username: {type: String, required: true},
  password: {type: String, required: true},
  isAdmin: {type: Boolean, default: false},
  phone: {type: String, default: ''},
  madeAt: {type: Date, default: Date.now()}
})

const User = model('User', user)

module.exports = User
