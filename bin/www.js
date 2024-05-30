require('dotenv').config()

const express = require('express')
const connectDB = require('../config/db')
const syncDatabase = require('../src/repo/associations')
const port = process.env.PORT || 4848
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
;(async () => {
  await connectDB()
  await syncDatabase()
})()

app.listen(port, () => {
  console.log('Server is listening on PORT:', port)
})
