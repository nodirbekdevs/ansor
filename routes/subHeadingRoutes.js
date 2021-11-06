const router = require('express').Router()
const {getSubHeadings, getSubHeading, makeSubHeading, updateSubHeading, deleteSubHeading} = require('./../views/subHeadingViews')
const {IsAuthenticated} = require('./../utils/keys')

router.get('/', getSubHeadings)
router.get('/:id', getSubHeading)
router.post('/create', IsAuthenticated, makeSubHeading)
router.put('/edit/:id', IsAuthenticated, updateSubHeading)
router.delete('/delete/:id', IsAuthenticated, deleteSubHeading)

module.exports = router
