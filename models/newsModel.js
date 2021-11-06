const {Schema, model} = require('mongoose')

const news = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  richDescription: {type: String, required: true},
  image: {type: String, default: ''},
  madeAt: {type: Date, default: Date.now()}
})

const News = model('News', news)

module.exports = News
