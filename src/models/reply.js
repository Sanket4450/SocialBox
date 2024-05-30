const { DataTypes } = require('sequelize')
const sequelize = require('../../config/sequelize')

const Reply = sequelize.define('Reply', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = Reply
