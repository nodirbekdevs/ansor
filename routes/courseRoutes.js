const router = require('express').Router()
const {getCourses, getCourse, makeCourse, updateCourse, deleteCourse} = require('./../views/courseViews')
const {IsAuthenticated, transfer} = require('./../utils/keys')

router.get('/', getCourses)
router.get('/:id', getCourse)
router.post('/create', IsAuthenticated, transfer, makeCourse)
router.put('/edit/:id', IsAuthenticated, transfer, updateCourse)
router.delete('/delete/:id', IsAuthenticated, deleteCourse)

module.exports = router
