const express = require('express')
const app = express()
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const morgan = require('morgan')
const connectDB = require('./config/db')
const { errorHandler } = require('./middlewares/errorMiddleware')
const authRoute = require('./controllers/authController')
const categoryRoute = require('./controllers/categoryController')
const postRoute = require('./controllers/postController')
const userRoute = require('./controllers/userController')
require('dotenv').config()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

connectDB()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name)
  },
})

const upload = multer({ storage: storage })
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('Đã tải lên file')
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)
app.use('/api/users', userRoute)
app.use('/api/categories', categoryRoute)

// Middleware for handle error
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
})
