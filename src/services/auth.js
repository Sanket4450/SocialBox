const httpStatus = require('http-status')
const ApiError = require('../utils/ApiError')
const messages = require('../constants/messages')
const CommonRepository = require('../repo/commonRepository')
const { User } = require('../models')

class AuthService {
  constructor() {
    this.repository = new CommonRepository(User)
  }

  async checkUserExistByEmail(email) {
    if (await this.repository.findOne({ email })) {
      throw new ApiError(messages.ERROR.USER_ALREADY_EXIST_WITH_EMAIL)
    }
  }

  async checkUserExistByUserName(userName) {
    if (await this.repository.findOne({ userName })) {
      throw new ApiError(messages.ERROR.USER_ALREADY_EXIST_WITH_USERNAME)
    }
  }

  async createUser(createData) {
    return this.repository.create(createData)
  }
}

module.exports = AuthService
