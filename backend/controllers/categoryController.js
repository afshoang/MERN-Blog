const categoryRoute = require('express').Router()
const Category = require('../models/categoryModel')
const asyncHandler = require('express-async-handler')

categoryRoute.get(
  '/',
  asyncHandler(async (req, res) => {
    const categories = await Category.find({})
    res.json(categories)
  })
)

categoryRoute.post(
  '/',
  asyncHandler(async (req, res) => {
    console.log(req.body)
    const newCat = new Category({ name: req.body.name })

    const savedCat = await newCat.save()
    res.status(200).json(savedCat)
  })
)

module.exports = categoryRoute
