const SubHeading = require('./../models/subHeadingModel')

const getSubHeadings = async (req, res) => {
  try {
    const subHeadings = await SubHeading.find()
    if (!subHeadings) res.status(404).json({message: 'Topilmadi'})
    res.status(200).json(subHeadings)
  } catch (e) {
    res.status(500).json(e)
  }
}

const getSubHeading = async (req, res) => {
  try {
    const subHeading = await SubHeading.findById(req.params.id)
    if (!subHeading) res.status(404).json({message: 'Topilmadi'})
    res.status(200).json(subHeading)
  } catch (e) {
    res.status(500).json(e)
  }
}

const makeSubHeading = async (req, res) => {
  const {address, phone, mail, telegramLink, facebookLink, InstagramLink} = req.body
  const subHeading = new SubHeading({address, phone, mail, telegramLink, facebookLink, InstagramLink})
  try {
    await subHeading.save()
    if (!subHeading) res.status(404).json({message: 'Yozilmadi'})
    res.status(200).json(subHeading)
  } catch (e) {
    res.status(500).json(e)
  }

}

const updateSubHeading = async (req, res) => {
  try {
    const {address, phone, mail, telegramLink, facebookLink, InstagramLink} = req.body
    const subHeading = await SubHeading.findByIdAndUpdate(
      req.params.id,
      {address, phone, mail, telegramLink, facebookLink, InstagramLink},
      {new: true}
    )
    if (!subHeading) res.status(404).json({message: 'O`zgartirilmadi'})
    res.status(200).json(subHeading)
  } catch (e) {
    res.status(500).json(e)
  }
}

const deleteSubHeading = async (req, res) => {
  SubHeading.findByIdAndDelete(req.params.id).then(subHeading => {
    if (subHeading) return res.status(500).json({success: true, message: 'O`chirildi'})
    else return res.status(500).json({success: true, message: 'O`chirilmadi'})
  }).catch(error => {
    return res.status(400).json({success: false, error: error})
  })
}

module.exports = {getSubHeadings, getSubHeading, makeSubHeading, updateSubHeading, deleteSubHeading}
