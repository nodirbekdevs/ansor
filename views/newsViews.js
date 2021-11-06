const News = require('./../models/newsModel')

const getNews = async (req, res) => {
  try {
    const news = await News.find()
    if (!news) res.status(404).json({message: 'Yangiliklar topilmadi'})
    res.status(200).json(news)
  } catch (e) {
    res.status(500).json(e)
  }
}

const getNew = async (req, res) => {
  try {
    const news = await News.findById(req.params.id)
    if (!news) res.status(404).json({message: 'Yangilik topilmadi'})
    res.status(200).json(news)
  } catch (e) {
    res.status(500).json(e)
  }
}

const makeNews = async (req, res) => {
  const {title, description, richDescription} = req.body
  const image = req.file ? req.file.path : ''
  const news = new News({title, description, richDescription, image})
  try {
    await news.save()
    if (!news) res.status(404).json({message: 'Yangilik yozilmadi'})
    res.status(200).json(news)
  } catch (e) {
    res.status(500).json(e)
  }

}

const updateNews = async (req, res) => {
  try {
    const {title, description, richDescription} = req.body
    const image = req.file ? req.file.path : ''
    const news = await News.findByIdAndUpdate(
      req.params.id,
      {title, description, richDescription, image},
      {new: true}
    )
    if (!news) res.status(404).json({message: 'Yangilik o`zgartirilmadi'})
    res.status(200).json(news)
  } catch (e) {
    res.status(500).json(e)
  }
}

const deleteNews = async (req, res) => {
  News.findByIdAndDelete(req.params.id).then(news => {
    if (news) return res.status(500).json({success: true, message: 'Yangilik o`chirildi'})
    else return res.status(500).json({success: true, message: 'Yangilik o`chirilmadi'})
  }).catch(error => {
    return res.status(400).json({success: false, error: error})
  })
}

module.exports = {getNews, getNew, makeNews, updateNews, deleteNews}
