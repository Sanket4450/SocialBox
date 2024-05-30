require('dotenv').config()

const { connectDB } = require('./config/db')
const { syncDatabase } = require('./src/repo')

;(async () => {
  await connectDB()
  await syncDatabase()
})()
