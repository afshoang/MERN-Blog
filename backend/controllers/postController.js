const postRoute = require('express').Router()
const asyncHandler = require('express-async-handler')
const Post = require('../models/postModel')
const protect = require('../middlewares/authMiddleware')

/**
 * @desc Get all posts
 * @route /api/posts
 * @access Public
 */
postRoute.get(
  '/',
  asyncHandler(async (req, res) => {
    const posts = await Post.find({})
    res.json(posts)
  })
)

/**
 * @desc Get a single post
 * @route /api/posts/:id
 * @access Public
 */
postRoute.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)
    res.json(post)
  })
)

/**
 * @desc Create a new post
 * @route /api/posts
 * @access Private
 */
postRoute.post(
  '/',
  protect,
  asyncHandler(async (req, res, next) => {
    const { title, content } = req.body
    console.log(req.user)
    const newPost = new Post({
      title,
      content,
      user: req.user._id,
    })
    const savedPost = await newPost.save()
    res.json(savedPost)
  })
)

/**
 * @desc Update a post
 * @route /api/posts:id
 * @access Private
 */
postRoute.put(
  '/:id',
  protect,
  asyncHandler(async (req, res, next) => {
    const post = await Post.findById(req.params.id)
    if (post.user.toString() === req.user._id.toString()) {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      )
      res.status(200).json(updatedPost)
    } else {
      res.status(401).json('Bạn không có quyền chỉnh sửa bài viết này!')
    }
  })
)

/**
 * @desc Delete a post
 * @route /api/posts:id
 * @access Private
 */
postRoute.delete(
  '/:id',
  protect,
  asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)
    if (post.user.toString() === req.user._id.toString()) {
      await Post.findByIdAndRemove(req.params.id)
      res.status(200).json({ message: 'Đã xóa bài viết' })
    } else {
      res.status(401).json('Bạn không có quyền xóa bài viết này!')
    }
  })
)

module.exports = postRoute