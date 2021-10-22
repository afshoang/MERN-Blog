const userRoute = require('express').Router()
const User = require('../models/userModel')
const Post = require('../models/postModel')
const asyncHandler = require('express-async-handler')
const bcryptjs = require('bcryptjs')

/**
 * @desc Login
 * @route /api/users
 */

/**
 * @desc Fetch user by Id
 * @route /api/users/:id
 * @access admin
 */
userRoute.get(
  '/:id',
  asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id)

    if (user) {
      res.json(user)
    } else {
      res.status(404)
      throw new Error('Không tìm thấy tài khoản này!')
    }
  })
)

/**
 * @desc Update info user
 * @route /api/users/:id
 * @access Private
 */
userRoute.put(
  '/:id',
  asyncHandler(async (req, res, next) => {
    if (req.body.password) {
      const salt = 10
      req.body.password = await bcryptjs.hash(req.body.password, salt)
    }

    const user = await User.findById(req.params.id)
    if (user) {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      )
      res.status(201).json(updatedUser)
    } else {
      res.status(500)
      throw new Error('Không tìm thấy tài khoản này!')
    }
  })
)

/**
 * @desc Delete user
 * @route /api/users/:id
 * @access Private
 */

userRoute.delete(
  '/:id',
  asyncHandler(async (req, res, next) => {
    await Post.deleteMany({ user: req.params.id })
    await User.findByIdAndRemove(req.params.id)
    res.json({ message: 'Đã xóa tài khoản!' })
  })
)

module.exports = userRoute
