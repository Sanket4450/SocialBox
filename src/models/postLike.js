const { DataTypes } = require('sequelize')
const sequelize = require('../../config/sequelize')

const PostLike = sequelize.define('PostLike', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
})

module.exports = PostLike
