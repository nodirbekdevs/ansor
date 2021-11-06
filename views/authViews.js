const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('./../models/userModel')
const {secret_jwt} = require('./../utils/keys')


const login = async (req, res) => {
  const {username, password} = req.body
  const candidate = await User.findOne({username: username})
  if (candidate) {
    const passwordResult = bcrypt.compareSync(password, candidate.password)
    if (passwordResult) {
      const token = jwt.sign(
        {username: candidate.username, userId: candidate._id, isAdmin: candidate.isAdmin},
        secret_jwt,
        {expiresIn: 60 * 60}
      )
      res.status(200).json({token: `Bearer ${token}`})
    } else {
      res.status(401).json({message: 'Пароли не совпадают. Попробуйте снова'})
    }
  } else {
    res.status(404).json({message: 'Пользователь с таким email не найден'})
  }
}

module.exports = login
