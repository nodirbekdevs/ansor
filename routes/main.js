const express = require('express')
const userRoutes = require('./userRoutes')
const captionRoutes = require('./captionRoutes')
const newsRoutes = require('./newsRoutes')
const subjectRoutes = require('./subjectRoutes')
const tutorRoutes = require('./tutorRoutes')
const courseRoutes = require('./courseRoutes')
const studentRoutes = require('./studentRoutes')
const communicationRoutes = require('./communicationRoutes')
const subHeadingRoutes = require('./subHeadingRoutes')
const authRoutes = require('./authRoutes')
const {IsAuthenticated} = require('./../utils/keys')

const main = express()

main.use('/captions', captionRoutes)
main.use('/news', newsRoutes)
main.use('/subjects', IsAuthenticated, subjectRoutes)
main.use('/tutors', tutorRoutes)
main.use('/courses', courseRoutes)
main.use('/students', studentRoutes)
main.use('/communications', communicationRoutes)
main.use('/subHeadings', subHeadingRoutes)
main.use('/auth', authRoutes)
main.use('/users',  userRoutes)

module.exports = main
