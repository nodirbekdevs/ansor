const {Schema, model} = require('mongoose')

const caption = new Schema({
  title: {type: String, required: true},
  slogan: {type: String, required: true},
  madeAt: {type: Date, default: Date.now()}
})

const Caption = model('Caption', caption)

module.exports = Caption
