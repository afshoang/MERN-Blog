const bcryptjs = require('bcryptjs')

const users = [
  {
    username: 'admin',
    email: 'admin@gmail.com',
    password: bcryptjs.hashSync('123456', 10),
  },
  {
    username: 'hoangpham',
    email: 'hoangpham@gmail.com',
    password: bcryptjs.hashSync('123456', 10),
  },
]

module.exports = users
