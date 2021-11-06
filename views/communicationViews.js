const Communication = require('./../models/communicationModel')

const getCommunications = async (req, res) => {
  try {
    const communications = await Communication.find()
    if (!communications) res.status(404).json({message: 'Aloqalar topilmadi'})
    res.status(200).json(communications)
  } catch (e) {
    res.status(500).json(e)
  }
}

const getCommunication = async (req, res) => {
  try {
    const communication = await Communication.findById(req.params.id)
    if (!communication) res.status(404).json({message: 'Aloqalar topilmadi'})
    res.status(200).json(communication)
  } catch (e) {
    res.status(500).json(e)
  }
}

const makeCommunication = async (req, res) => {
  const {name, phone} = req.body
  const communication = new Communication({name, phone})
  try {
    await communication.save()
    if (!communication) res.status(404).json({message: 'Aloqalar yozilmadi'})
    res.status(200).json(communication)
  } catch (e) {
    res.status(500).json(e)
  }

}

const updateCommunication = async (req, res) => {
  try {
    const {name, phone} = req.body
    const communication = await Communication.findByIdAndUpdate(req.params.id, {name, phone}, {new: true})
    if (!communication) res.status(404).json({message: 'Aloqalar o`zgartirilmadi'})
    res.status(200).json(communication)
  } catch (e) {
    res.status(500).json(e)
  }
}

const deleteCommunication = async (req, res) => {
  Communication.findByIdAndDelete(req.params.id).then(communication => {
    if (communication) return res.status(500).json({success: true, message: 'Aloqalar o`chirildi'})
    else return res.status(500).json({success: true, message: 'Aloqalar o`chirilmadi'})
  }).catch(error => {
    return res.status(400).json({success: false, error: error})
  })
}

module.exports = {getCommunications, getCommunication, makeCommunication, updateCommunication, deleteCommunication}
