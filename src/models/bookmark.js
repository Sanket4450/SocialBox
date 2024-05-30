const { DataTypes } = require('sequelize')
const sequelize = require('../../config/db')

const Bookmark = sequelize.define('Bookmark', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
})

module.exports = Bookmark
