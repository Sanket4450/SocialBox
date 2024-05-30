const { DataTypes } = require('sequelize')
const sequelize = require('../../config/sequelize')

const Hashtag = sequelize.define('Hashtag', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postsCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
})

module.exports = Hashtag
Hashtag.bulkCreate