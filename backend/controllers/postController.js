const postRouter = require('express').Router()
const Post = require('../models/postModel')

postRouter.get('/', async (req, res) => {
  const posts = await Post.find({})
  res.json(posts)
})

postRouter.post('/', async (req, res) => {
  const { title, content } = req.body
  try {
    const newPost = new Post({
      title,
      content,
    })
    const savedPost = await newPost.save()
    res.json(savedPost)
  } catch (error) {
    console.log(error)
  }
})

// app.get('/api/posts/:id', (req, res) => {
//   const id = req.params.id
//   const singlePost = posts.find((p) => p.id === Number(id))
//   res.json(singlePost)
// })

module.exports = postRouter
