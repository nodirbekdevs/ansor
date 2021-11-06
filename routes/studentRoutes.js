const router = require('express').Router()
const {getStudents, getStudent, makeStudent, updateStudent, deleteStudent} = require('./../views/studentViews')
const {IsAuthenticated, transfer} = require('./../utils/keys')


router.get('/', getStudents)
router.get('/:id', getStudent)
router.post('/create', IsAuthenticated, transfer, makeStudent)
router.put('/edit/:id', IsAuthenticated, transfer, updateStudent)
router.delete('/delete/:id', IsAuthenticated, deleteStudent)

module.exports = router
