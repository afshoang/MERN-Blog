const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'User',
    },
    categories: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
)

const Post = mongoose.model('Post', postSchema)

module.exports = Post
