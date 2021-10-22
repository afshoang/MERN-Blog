const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

/**
 * Get token from authentication header, decode and save user id into req.user
 */
const protect = asyncHandler(async (req, res, next) => {
  let token
  const authorization = req.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    try {
      token = authorization.substring(7)
      const decode = jwt.verify(token, process.env.JWT_SECRET)

      req.user = await User.findById(decode.id).select('-password')

      next()
    } catch (error) {
      res.status(401)
      throw new Error('Token không hợp lệ!')
    }
  }
})

module.exports = protect
