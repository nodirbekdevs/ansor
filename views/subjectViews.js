const Subject = require('./../models/subjectModel')

const getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find()
    if (!subjects) res.status(404).json({message: 'Fanlarlar topilmadi'})
    res.status(200).json(subjects)
  } catch (e) {
    res.status(500).json(e)
  }
}

const getSubject = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id)
    if (subject) res.status(404).json({message: 'Fan topilmadi'})
    res.status(200).json(subject)
  } catch (e) {
    res.status(500).json(e)
  }
}

const makeSubject = async (req, res) => {
  const {name, description} = req.body
  const subject = new Subject({name, description})
  try {
    await subject.save()
    if (!subject) res.status(404).json({message: 'Fan qo`shilmadi'})
    res.status(200).json(subject)
  } catch (e) {
    res.status(500).json(e)
  }

}

const updateSubject = async (req, res) => {
  try {
    const {name, description} = req.body
    const subject = await Subject.findByIdAndUpdate(req.params.id, {name, description}, {new: true})
    if (!subject) res.status(404).json({message: 'Fan o`zgartirilmadi'})
    res.status(200).json(subject)
  } catch (e) {
    res.status(500).json(e)
  }
}

const deleteSubject = async (req, res) => {
  Subject.findByIdAndDelete(req.params.id).then(subject => {
    if (subject) return res.status(500).json({success: true, message: 'Fan o`chirildi'})
    else return res.status(500).json({success: true, message: 'Fan o`chirilmadi'})
  }).catch(error => {
    return res.status(400).json({success: false, error: error})
  })
}

module.exports = {getSubjects, getSubject, makeSubject, updateSubject, deleteSubject}
