const express = require('express')
const app = express()
const connectDB = require('./config/db')
const authRoute = require('./controllers/authController')
const postRouter = require('./controllers/postController')
const userRoute = require('./controllers/userController')
require('dotenv').config()

app.use(express.json())

connectDB()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/api/auth', authRoute)
app.use('/api/posts', postRouter)
app.use('/api/users', userRoute)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
