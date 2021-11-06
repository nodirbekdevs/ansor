const router = require('express').Router()
const login = require('./../views/authViews')

router.post('/login', login)

module.exports = router
