const express = require('express')
const app = express()
const connectDB = require('./config/db')
const posts = require('./data/posts')
const postRouter = require('./controllers/postController')

app.use(express.json())
require('dotenv').config()

connectDB()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/api/posts', postRouter)

// app.get('/api/posts/:id', (req, res) => {
//   const id = req.params.id
//   const singlePost = posts.find((p) => p.id === Number(id))
//   res.json(singlePost)
// })

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
