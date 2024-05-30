const { DataTypes } = require('sequelize')
const sequelize = require('../../config/sequelize')

const Comment = sequelize.define('Comment', {
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

module.exports = Comment
