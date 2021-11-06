const Course = require('./../models/courseModel')
const Subject = require('./../models/subjectModel')
const Tutor = require('./../models/tutorModel')

const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('author', 'subject')
    if (!courses) res.status(404).json({message: 'Kurslar topilmadi'})
    res.status(200).json(courses)
  } catch (e) {
    res.status(500).json(e)
  }
}

const getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('author', 'subject')
    if (!course) res.status(404).json({message: 'Kurs topilmadi'})
    res.status(200).json(course)
  } catch (e) {
    res.status(500).json(e)
  }
}

const makeCourse = async (req, res) => {
  const {description, price} = req.body
  const image = req.file ? req.file.path : ''
  const author = await Tutor.findById(req.body.author)
  const subject = await Subject.findById(req.body.subject)
  if (!author || !subject) res.status(404).json({message: 'Topilmadi'})
  const course = new Course({author, subject, description, price, image})
  try {
    await course.save()
    if (!course) res.status(404).json({message: 'Kurs yozilmadi'})
    res.status(200).json(course)
  } catch (e) {
    res.status(500).json(e)
  }

}

const updateCourse = async (req, res) => {
  try {
    const {description, price} = req.body
    const image = req.file ? req.file.path : ''
    const author = await Tutor.findById(req.body.author)
    const subject = await Subject.findById(req.body.subject)
    if (!author || !subject) res.status(404).json({message: 'Topilmadi'})
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      {author, subject, description, price, image},
      {new: true})
    if (!course) res.status(404).json({message: 'Kurs o`zgartirilmadi'})
    res.status(200).json(course)
  } catch (e) {
    res.status(500).json(e)
  }
}

const deleteCourse = async (req, res) => {
  Course.findByIdAndDelete(req.params.id).then(course => {
    if (course) return res.status(500).json({success: true, message: 'Kurs o`chirildi'})
    else return res.status(500).json({success: true, message: 'Kurs o`chirilmadi'})
  }).catch(error => {
    return res.status(400).json({success: false, error: error})
  })
}

module.exports = {getCourses, getCourse, makeCourse, updateCourse, deleteCourse}
