const { DataTypes } = require('sequelize')
const sequelize = require('../../config/db')

const Follower = sequelize.define('Follower', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
})

module.exports = Follower
