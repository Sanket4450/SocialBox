const httpStatus = require('http-status')
const ApiError = require('../utils/ApiError')
const messages = require('../constants/messages')
const CommonRepository = require('../repo/commonRepository')
const { User } = require('../models')

class UserService {
  constructor() {
    this.repository = new CommonRepository(User)
  }

  async getUsers(query) {
    return this.repository.findMany(query)
  }
}

module.exports = UserService
