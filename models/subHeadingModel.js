const {Schema, model} = require('mongoose')

const subHeading = new Schema({
  address: {type: String, required: true},
  phone: {type: String, required: true},
  mail: {type: String, required: true},
  telegramLink: {type: String, required: true},
  facebookLink: {type: String, required: true},
  InstagramLink: {type: String, required: true},
})

const SubHeading = model('SubHeading', subHeading)

module.exports = SubHeading
