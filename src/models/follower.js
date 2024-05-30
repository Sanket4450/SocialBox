const { DataTypes } = require('sequelize')
const sequelize = require('../../config/sequelize')

const Follower = sequelize.define('Follower', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
})

module.exports = Follower
