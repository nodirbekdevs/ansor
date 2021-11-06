const router = require('express').Router()
const {getTutors, getTutor, makeTutor, updateTutor, deleteTutor} = require('./../views/tutorViews')
const {IsAuthenticated, transfer} = require('./../utils/keys')

router.get('/', getTutors)
router.get('/:id', getTutor)
router.post('/create', IsAuthenticated, transfer, makeTutor)
router.put('/edit/:id', IsAuthenticated, transfer, updateTutor)
router.delete('/delete/:id', IsAuthenticated, deleteTutor)

module.exports = router
