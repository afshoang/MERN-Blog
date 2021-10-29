const authRoute = require('express').Router()
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const bcryptjs = require('bcryptjs')
const generateToken = require('../utils/generateToken')

/**
 * @desc Register a new user
 * @route /api/register/
 * @access Public
 */
authRoute.post(
  '/register',
  asyncHandler(async (req, res, next) => {
    const { username, email, password } = req.body

    const userExisted = await User.findOne({ username })

    console.log(userExisted)

    if (userExisted) {
      res.status(400)
      throw new Error('Tài khoản đã tồn tại')
    }

    // hash password
    const salt = 10
    const hashPassword = await bcryptjs.hash(password, salt)
    // end hash

    const newUser = new User({
      username,
      email,
      password: hashPassword,
    })

    const savedUser = await newUser.save()

    if (savedUser) {
      res.status(201).json({
        id: savedUser._id,
        username: savedUser.username,
        token: generateToken(savedUser._id),
      })
    } else {
      res.status(400)
      throw new Error('Dữ liệu nhập vào không hợp lệ!')
    }
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
    const { email, password } = req.body

    const user = await User.findOne({ email })
    console.log(user)
    const passwordMatch =
      user === null ? false : await bcryptjs.compare(password, user.password)

    if (!(user && passwordMatch)) {
      res.status(401).json({ message: 'Tài khoản hoặc mật khẩu không hợp lệ' })
    }

    res.json({
      id: user._id,
      username: user.username,
      token: generateToken(user._id),
    })
  })
)

module.exports = authRoute
