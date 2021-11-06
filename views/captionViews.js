const Caption = require('./../models/captionModel')

const getCaptions = async (req, res) => {
  try {
    const captions = await Caption.find()
    if (!captions) res.status(404).json({message: 'Topilamdi'})
    res.status(200).json(captions)
  } catch (e) {
    res.status(500).json(e)
  }
}

const getCaption = async (req, res) => {
  try {
    const caption = await Caption.findById(req.params.id)
    if (!caption) res.status(404).json({message: 'Topilamdi'})
    res.status(200).json(caption)
  } catch (e) {
    res.status(500).json(e)
  }
}

const makeCaption = async (req, res) => {
  const {title, slogan} = req.body
  const caption = new Caption({title, slogan})
  try {
    await caption.save()
    if (!caption) res.status(404).json({message: 'Yozilmadi'})
    res.status(200).json(caption)
  } catch (e) {
    res.status(500).json(e)
  }

}

const updateCaption = async (req, res) => {
  try {
    const {title, slogan} = req.body
    const caption = await Caption.findByIdAndUpdate(req.params.id, {title, slogan}, {new: true})
    if (!caption) res.status(404).json({message: 'O`zgarmadi'})
    res.status(200).json(caption)
  } catch (e) {
    res.status(500).json(e)
  }
}

const deleteCaption = async (req, res) => {
  Caption.findByIdAndDelete(req.params.id).then(caption => {
    if (caption) return res.status(500).json({success: true, message: 'O`chirildi'})
    else return res.status(500).json({success: true, message: 'O`chirilmadi'})
  }).catch(error => {
    return res.status(400).json({success: false, error: error})
  })
}

module.exports = {getCaptions, getCaption, makeCaption, updateCaption, deleteCaption}
