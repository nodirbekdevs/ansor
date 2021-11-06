const Student = require('./../models/studentModel')
const User = require('./../models/userModel')
const Subject = require('./../models/subjectModel')

const getStudents = async (req, res) => {
  try {
    const students = await Student.find()
    if (!students) res.status(404).json({message: 'O`quvchilar topilmadi'})
    res.status(200).json(students)
  } catch (e) {
    res.status(500).json(e)
  }
}

const getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id)
    if (!student) res.status(404).json({message: 'O`quvchi topilmadi'})
    res.status(200).json(student)
  } catch (e) {
    res.status(500).json(e)
  }
}

const makeStudent = async (req, res) => {
  const {name, phone, description} = req.body
  const image = req.file ? req.file.path : ''
  const subject = await Subject.findById(req.body.subject)
  if (!subject) res.status(404).json({message: 'Topilmadi'})
  const student = new Student({subject, name, phone, description, image})
  try {
    await student.save()
    if (!student) res.status(404).json({message: 'O`quvchi yozilmadi'})
    res.status(200).json(student)
  } catch (e) {
    res.status(500).json(e)
  }

}

const updateStudent = async (req, res) => {
  try {
    const {name, phone, description} = req.body
    const image = req.file ? req.file.path : ''
    const subject = await Subject.findById(req.body.subject)
    if (!subject) res.status(404).json({message: 'Topilmadi'})
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      {subject, name, phone, description, image},
      {new: true}
    )
    if (!student) res.status(404).json({message: 'O`quvchi o`zgartirilmadi'})
    res.status(200).json(student)
  } catch (e) {
    res.status(500).json(e)
  }
}

const deleteStudent = async (req, res) => {
  Student.findByIdAndDelete(req.params.id).then(student => {
    if (student) return res.status(500).json({success: true, message: 'O`quvchi o`chirildi'})
    else return res.status(500).json({success: true, message: 'O`quvchi o`chirilmadi'})
  }).catch(error => {
    return res.status(400).json({success: false, error: error})
  })
}

module.exports = {getStudents, getStudent, makeStudent, updateStudent, deleteStudent}
