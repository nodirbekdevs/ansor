const Tutor = require('./../models/tutorModel')
const Subject = require('./../models/subjectModel')

const getTutors = async (req, res) => {
  try {
    const tutors = await Tutor.find().populate('user', 'subject')
    if (!tutors) res.status(404).json({message: 'Ustozlar topilmadi'})
    res.status(200).json(tutors)
  } catch (e) {
    res.status(500).json(e)
  }
}

const getTutor = async (req, res) => {
  try {
    const tutor = await Tutor.findById(req.params.id).populate('user', 'description')
    if (!tutor) res.status(404).json({message: 'Ustoz topilmadi'})
    res.status(200).json(tutor)
  } catch (e) {
    res.status(500).json(e)
  }
}

const makeTutor = async (req, res) => {
  const {name, phone, address, description} = req.body
  const image = req.file ? req.file.path : ''
  const subject = Subject.findById(req.body.subject)
  if (!subject) res.status(404).json({message: 'Topilmadi'})
  const tutor = new Tutor({subject, name, phone, address, description, image})
  try {
    await tutor.save()
    if (!tutor) res.status(404).json({message: 'Ustoz saqlanmadi'})
    res.status(200).json(tutor)
  } catch (e) {
    res.status(500).json(e)
  }
}

const updateTutor = async (req, res) => {
  try {
    const {name, phone, address, description} = req.body
    const image = req.file ? req.file.path : ''
    const subject = Subject.findById(req.body.subject)
    if (!subject) res.status(404).json({message: 'Topilmadi'})
    const tutor = await Tutor.findByIdAndUpdate(req.params.id, {subject, name, phone, address, description, image}, {new: true})
    if (!tutor) res.status(404).json({message: 'Ustoz o`gartirilmadi'})
    res.status(200).json(tutor)
  } catch (e) {
    res.status(500).json(e)
  }
}

const deleteTutor = async (req, res) => {
  Tutor.findByIdAndDelete(req.params.id).then(tutor => {
    if (tutor) return res.status(500).json({success: true, message: 'Ustoz o`chirildi'})
    else return res.status(500).json({success: true, message: 'Ustoz o`chirilmadi'})
  }).catch(error => {
    return res.status(400).json({success: false, error: error})
  })
}

module.exports = {getTutors, getTutor, makeTutor, updateTutor, deleteTutor}
