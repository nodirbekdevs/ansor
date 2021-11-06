const router = require('express').Router()
const {getSubjects, getSubject, makeSubject, updateSubject, deleteSubject} = require('./../views/subjectViews')

router.get('/', getSubjects)
router.get('/:id', getSubject)
router.post('/create', makeSubject)
router.put('/edit/:id', updateSubject)
router.delete('/delete/:id', deleteSubject)

module.exports = router
