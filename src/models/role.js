const { DataTypes } = require('sequelize')
const sequelize = require('../../config/sequelize')

const Role = sequelize.define('Role', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = Role
