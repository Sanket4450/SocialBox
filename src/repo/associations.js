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
    // Role.hasMany(User, { foreignKey: 'role' })
    // User.belongsTo(Role, { foreignKey: 'role', targetKey: 'id' })

    User.hasMany(Post, { foreignKey: 'userId' })
    Post.belongsTo(User, { foreignKey: 'userId' })

    User.hasMany(Story, { foreignKey: 'userId' })
    Story.belongsTo(User, { foreignKey: 'userId' })

    User.hasMany(Comment, { foreignKey: 'userId' })
    Post.hasMany(Comment, { foreignKey: 'postId' })
    Comment.belongsTo(User, { foreignKey: 'userId' })
    Comment.belongsTo(Post, { foreignKey: 'postId' })

    User.hasMany(Reply, { foreignKey: 'userId' })
    Comment.hasMany(Reply, { foreignKey: 'commentId' })
    Reply.belongsTo(User, { foreignKey: 'userId' })
    Reply.belongsTo(Comment, { foreignKey: 'commentId' })

    User.hasMany(Notification, { foreignKey: 'userId' })
    Notification.belongsTo(User, { foreignKey: 'userId' })

    User.belongsToMany(User, {
      as: 'followers',
      through: Follower,
      foreignKey: 'followingId',
      otherKey: 'followerId',
    })

    Post.belongsToMany(Hashtag, {
      as: 'hashtags',
      through: PostHashtag,
      foreignKey: 'postId',
      otherKey: 'hashtagId',
    })
    Hashtag.belongsToMany(Post, {
      as: 'posts',
      through: PostHashtag,
      foreignKey: 'hashtagId',
      otherKey: 'postId',
    })

    User.belongsToMany(Post, {
      as: 'savedPosts',
      through: Bookmark,
      foreignKey: 'userId',
      otherKey: 'postId',
    })
    Post.belongsToMany(User, {
      as: 'savedBy',
      through: Bookmark,
      foreignKey: 'postId',
      otherKey: 'userId',
    })

    User.belongsToMany(Post, {
      as: 'taggedBy',
      through: PostTag,
      foreignKey: 'userId',
      otherKey: 'postId',
    })
    Post.belongsToMany(User, {
      as: 'taggedUsers',
      through: PostTag,
      foreignKey: 'postId',
      otherKey: 'userId',
    })

    User.belongsToMany(Post, {
      as: 'likedPosts',
      through: PostLike,
      foreignKey: 'userId',
      otherKey: 'postId',
    })
    Post.belongsToMany(User, {
      as: 'likedBy',
      through: PostLike,
      foreignKey: 'postId',
      otherKey: 'userId',
    })

    User.belongsToMany(Story, {
      as: 'likedStories',
      through: StoryLike,
      foreignKey: 'userId',
      otherKey: 'storyId',
    })
    Story.belongsToMany(User, {
      as: 'likedBy',
      through: StoryLike,
      foreignKey: 'storyId',
      otherKey: 'userId',
    })

    User.belongsToMany(Comment, {
      as: 'likedComments',
      through: CommentLike,
      foreignKey: 'userId',
      otherKey: 'commentId',
    })
    Comment.belongsToMany(User, {
      as: 'likedBy',
      through: CommentLike,
      foreignKey: 'commentId',
      otherKey: 'userId',
    })

    await sequelize.sync({ alter: true })
    console.log('Database synchronized successfully.')
  } catch (error) {
    console.error('Unable to synchronize the database:', error)
  }
}

module.exports = syncDatabase
