# MERN Blog

Full Stack Blog App built with React, Redux, NodeJs, MongoDB and deployed with Heroku

**Link to project:** https://mernbloghp.herokuapp.com/

```
Sample User Logins

admin@gmail.com
123456

hoangpham@gmail.com
123456

```

![alt tag](http://placecorgi.com/1200/650)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, React, NodeJs, MongoDB

## Usage

### Env Variables

Create a .env file in then root and add the following

```
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
```

### Install Dependencies (frontend & backend)

```
cd frontend
npm install
cd frontend
npm install
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```
