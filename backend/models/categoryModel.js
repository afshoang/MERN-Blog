const mongoose = require('mongoose')

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamp: true }
)

const Category = mongoose.model('Category', categorySchema)

module.exports = Category