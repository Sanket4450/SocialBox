const { Sequelize } = require('sequelize')

exports.connectDB = async () => {
  try {
    const sequelize = new Sequelize(
      `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/SocialBox`
    )

    try {
      await sequelize.authenticate()
      console.log('Connection has been established successfully.')
    } catch (error) {
      console.error('Unable to connect to the database:', error)
    }
  } catch (err) {
    console.log(err)
  }
}
