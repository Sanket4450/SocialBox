const { DataTypes } = require('sequelize')
const sequelize = require('../../config/db')

const PostLike = sequelize.define('PostLike', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
})

module.exports = PostLike
