const postRoute = require('express').Router()
const asyncHandler = require('express-async-handler')
const Post = require('../models/postModel')
const protect = require('../middlewares/authMiddleware')

/**
 * @desc Get all posts, or by username category
 * @route /api/posts
 * @access Public
 */
postRoute.get(
  '/',
  asyncHandler(async (req, res) => {
    // get username and category from req query
    const username = req.query.username
    const catName = req.query.cat
    let posts
    if (username) {
      posts = await Post.find({ username })
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      })
    } else {
      posts = await Post.find({})
    }

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
    const newPost = new Post({
      ...req.body,
      username: req.user.username,
    })
    console.log(newPost)
    const savedPost = await newPost.save()
    res.status(201).json(savedPost)
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
    if (post.username === req.user.username) {
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
    if (post.username === req.user.username) {
      await Post.findByIdAndRemove(req.params.id)
      res.status(200).json({ message: 'Đã xóa bài viết' })
    } else {
      res.status(401).json('Bạn không có quyền xóa bài viết này!')
    }
  })
)

module.exports = postRoute
