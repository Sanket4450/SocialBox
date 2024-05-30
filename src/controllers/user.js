const httpStatus = require('http-status')
const catchAsyncErrors = require('../utils/catchAsyncErrors')
const messages = require('../constants/messages')
const sendResponse = require('../utils/responseHandler')
const { UserService } = require('../services')

class UserController {
  constructor() {
    this.userService = new UserService()
  }

  getUsers = catchAsyncErrors(async (req, res) => {
    const users = await this.userService.getUsers()

    return sendResponse(
      res,
      httpStatus.OK,
      { users },
      messages.SUCCESS.USERS_FETCHED
    )
  })
}

module.exports = UserController
