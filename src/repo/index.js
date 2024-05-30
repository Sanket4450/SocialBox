const sequelize = require('../../config/db')

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
  through: Follower,
  foreignKey: 'followingId',
  otherKey: 'followerId',
})

Post.belongsToMany(Hashtag, { through: PostHashtag })
Hashtag.belongsToMany(Post, { through: PostHashtag })

User.belongsToMany(Post, { through: Bookmark })
Post.belongsToMany(User, { through: Bookmark })

User.belongsToMany(Post, { through: PostTag })
Post.belongsToMany(User, { through: PostTag })

User.belongsToMany(Post, { through: PostLike })
Post.belongsToMany(User, { through: PostLike })

User.belongsToMany(Post, { through: StoryLike })
Post.belongsToMany(User, { through: StoryLike })

User.belongsToMany(Post, { through: CommentLike })
Post.belongsToMany(User, { through: CommentLike })

exports.syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true })
    console.log('Database synchronized successfully.')
  } catch (error) {
    console.error('Unable to synchronize the database:', error)
  }
}
