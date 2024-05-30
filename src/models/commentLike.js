const { DataTypes } = require('sequelize')
const sequelize = require('../../config/sequelize')

const CommentLike = sequelize.define('CommentLike', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
})

module.exports = CommentLike
