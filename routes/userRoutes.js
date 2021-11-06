const router = require('express').Router()
const {getUsers, getUser, getUsersCount, makeUser, updateUser, deleteUser} = require('./../views/userViews')

router.get('/', getUsers)
router.get('/:id', getUser)
router.get('/count', getUsersCount)
router.post('/create', makeUser)
router.put('/edit/:id', updateUser)
router.delete('/delete/:id', deleteUser)

module.exports = router
