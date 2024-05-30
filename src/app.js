const express = require('express')
const cors = require('cors')
const httpStatus = require('http-status')
const connectDB = require('../config/db')
const syncDatabase = require('./repo/associations')
const ApiError = require('./utils/ApiError')
const router = require('./routes')
const { errorConverter, errorHandler } = require('./middlewares/error')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
;(async () => {
  await connectDB()
  await syncDatabase()
})()

app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Authorization, Content-Type, Accept'
  )
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  next()
})

app.use(
  cors({
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Authorization',
      'Content-Type',
      'Accept',
    ],
  })
)

app.get('/', (_, res) => {
  res.send('App is running')
})

app.use('/api', router)

app.use((_, __, next) => {
  next(new ApiError('Route not Found', httpStatus.NOT_FOUND))
})

app.use(errorConverter)

app.use(errorHandler)

module.exports = app
