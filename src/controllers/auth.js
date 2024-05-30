const httpStatus = require('http-status')
const catchAsyncErrors = require('../utils/catchAsyncErrors')
const messages = require('../constants/messages')
const sendResponse = require('../utils/responseHandler')
const { AuthService } = require('../services')

class AuthController {
  constructor() {
    this.authService = new AuthService()
  }

  registerUser = catchAsyncErrors(async (req, res) => {
    const body = req.body

    await this.authService.checkUserExistByEmail(body.email)
    await this.authService.checkUserExistByUserName(body.userName)

    const user = await this.authService.createUser(body)

    return sendResponse(
      res,
      httpStatus.OK,
      { user },
      messages.SUCCESS.USER_CREATED
    )
  })
}

module.exports = AuthController
