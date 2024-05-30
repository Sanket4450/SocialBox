const { DataTypes } = require('sequelize')
const sequelize = require('../../config/sequelize')

const Notification = sequelize.define('Notification', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imgUrl: {
    type: DataTypes.STRING,
    validate: {
      isUrl: true,
    },
  },
})

module.exports = Notification
