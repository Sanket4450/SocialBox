const { DataTypes } = require('sequelize')
const sequelize = require('../../config/sequelize')

const Bookmark = sequelize.define('Bookmark', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
})

module.exports = Bookmark
