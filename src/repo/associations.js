const sequelize = require('../../config/sequelize')

const {
  User,
  Role,
  Post,
  Notification,
  Comment,
  Reply,
  Story,
  Hashtag,
  Follower,
  Bookmark,
  PostLike,
  CommentLike,
  StoryLike,
  PostTag,
  PostHashtag,
} = require('../models')

const syncDatabase = async () => {
  try {
    Role.hasMany(User)
    User.belongsTo(Role)

    User.hasMany(Post)
    Post.belongsTo(User)

    User.hasMany(Story)
    Story.belongsTo(User)

    User.hasMany(Comment)
    Post.hasMany(Comment)
    Comment.belongsTo(User)
    Comment.belongsTo(Post)

    User.hasMany(Reply)
    Comment.hasMany(Reply)
    Reply.belongsTo(User)
    Reply.belongsTo(Comment)

    User.hasMany(Notification)
    Notification.belongsTo(User)

    User.belongsToMany(User, {
      as: 'followers',
      through: Follower,
      foreignKey: 'followingId',
      otherKey: 'followerId',
    })

    Post.belongsToMany(Hashtag, { as: 'hashtags', through: PostHashtag })
    Hashtag.belongsToMany(Post, { as: 'posts', through: PostHashtag })

    User.belongsToMany(Post, { as: 'savedPosts', through: Bookmark })
    Post.belongsToMany(User, { as: 'savedBy', through: Bookmark })

    User.belongsToMany(Post, { as: 'taggedBy', through: PostTag })
    Post.belongsToMany(User, { as: 'taggedUsers', through: PostTag })

    User.belongsToMany(Post, { as: 'likedPosts', through: PostLike })
    Post.belongsToMany(User, { as: 'likedBy', through: PostLike })

    User.belongsToMany(Story, { as: 'likedStories', through: StoryLike })
    Story.belongsToMany(User, { as: 'likedBy', through: StoryLike })

    User.belongsToMany(Comment, { as: 'likedComments', through: CommentLike })
    Comment.belongsToMany(User, { as: 'likedBy', through: CommentLike })

    await sequelize.sync({ alter: true })
    console.log('Database synchronized successfully.')
  } catch (error) {
    console.error('Unable to synchronize the database:', error)
  }
}

module.exports = syncDatabase
