const mongoose = require('mongoose')
require('dotenv').config()
const users = require('./data/users')
const posts = require('./data/posts')
const Post = require('./models/postModel')
const User = require('./models/userModel')
const connectDB = require('./config/db')

connectDB()

const importData = async () => {
  try {
    await Post.deleteMany()
    await User.deleteMany()

    const createdUser = await User.insertMany(users)

    const firstUser = createdUser[0].username

    const samplePosts = posts.map((post) => {
      return {
        ...post,
        username: firstUser,
      }
    })
    await Post.insertMany(samplePosts)

    console.log('Data imported')

    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Post.deleteMany()
    await User.deleteMany()

    console.log('Data destroyed')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
