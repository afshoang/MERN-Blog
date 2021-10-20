const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
  {
    title: {
      type: Strirng,
      required: true,
      unique: true,
    },
    content: {
      type: Strirng,
      required: true,
    },
    photo: {
      type: Strirng,
      required: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
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
