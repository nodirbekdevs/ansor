const router = require('express').Router()
const {
  getCommunications, getCommunication, makeCommunication, updateCommunication, deleteCommunication
} = require('./../views/communicationViews')
const {IsAuthenticated} = require('./../utils/keys')

router.get('/', IsAuthenticated, getCommunications)
router.get('/:id', IsAuthenticated, getCommunication)
router.post('/create',  makeCommunication)
router.put('/edit/:id', IsAuthenticated, updateCommunication)
router.delete('/delete/:id', IsAuthenticated, deleteCommunication)

module.exports = router
