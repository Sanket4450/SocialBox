const { DataTypes } = require('sequelize')
const sequelize = require('../../config/db')

const PostTag = sequelize.define('PostTag', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
})

module.exports = PostTag
