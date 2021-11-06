const router = require('express').Router()
const {getCaptions, getCaption, makeCaption, updateCaption, deleteCaption} = require('./../views/captionViews')
const {IsAuthenticated} = require('./../utils/keys')

router.get('/', getCaptions)
router.get('/:id', getCaption)
router.post('/create', IsAuthenticated,  makeCaption)
router.put('/edit/:id', IsAuthenticated, updateCaption)
router.delete('/delete/:id', IsAuthenticated, deleteCaption)

module.exports = router
