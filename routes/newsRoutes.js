const router = require('express').Router()
const {getNews, getNew, makeNews, updateNews, deleteNews} = require('./../views/newsViews')
const {IsAuthenticated, transfer} = require('./../utils/keys')

router.get('/', getNews)
router.get('/:id', getNew)
router.post('/create', IsAuthenticated, transfer, makeNews)
router.put('/edit/:id', IsAuthenticated, transfer, updateNews)
router.delete('/delete/:id', IsAuthenticated, deleteNews)

module.exports = router
