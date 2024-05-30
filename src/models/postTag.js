const { DataTypes } = require('sequelize')
const sequelize = require('../../config/sequelize')

const PostTag = sequelize.define('PostTag', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
})

module.exports = PostTag
