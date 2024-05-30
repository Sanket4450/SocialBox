const { DataTypes } = require('sequelize')
const sequelize = require('../../config/sequelize')

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  postType: {
    type: DataTypes.ENUM('pic', 'video', 'reel'),
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imgUrl: {
    type: DataTypes.STRING,
    validate: {
      isUrl: true,
    },
  },
  imgUrl: {
    type: DataTypes.STRING,
    validate: {
      isUrl: true,
    },
  },
  viewsCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
})

module.exports = Post
