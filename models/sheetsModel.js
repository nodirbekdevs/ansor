const {Schema, model} = require('mongoose')

const sheets = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  images: [{type: String, default: ''}],
  madeAt: {type: Date, default: Date.now()}
})

const Sheets = model('Sheets', sheets)

module.exports = Sheets
