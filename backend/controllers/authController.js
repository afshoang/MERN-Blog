const authRoute = require('express').Router()
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

/**
 * @desc Register a new user
 * @route /api/register/
 * @access Public
 */
authRoute.post(
  '/register',
  asyncHandler(async (req, res, next) => {
    const { username, email, password } = req.body

    // hash password
    const salt = 10
    const hashPassword = await bcryptjs.hash(password, salt)
    // end hash
    console.log(hashPassword)

    const newUser = new User({
      username,
      email,
      password: hashPassword,
    })

    const savedUser = await newUser.save()
    res.json(savedUser)
  })
)

/**
 * @desc Login
 * @route /api/auth/login
 * @access Public
 */
authRoute.post(
  '/login',
  asyncHandler(async (req, res) => {
    const { username, password } = req.body

    const user = await User.findOne({ username })
    const passwordMatch =
      user === null ? false : await bcryptjs.compare(password, user.password)

    if (!(user && passwordMatch)) {
      res.status(401).json({ message: 'Tài khoản hoặc mật khẩu không hợp lệ' })
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    })

    res.json({
      username: user.username,
      token,
    })
  })
)

module.exports = authRoute
