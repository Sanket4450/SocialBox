const { DataTypes } = require('sequelize')
const sequelize = require('../../config/db')

const PostHashtag = sequelize.define('PostHashtag', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
})

module.exports = PostHashtag
