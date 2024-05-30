const { DataTypes } = require('sequelize')
const sequelize = require('../../config/sequelize')

const StoryLike = sequelize.define('StoryLike', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
})

module.exports = StoryLike
