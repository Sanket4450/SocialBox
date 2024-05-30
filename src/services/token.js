const httpStatus = require('http-status')
const ApiError = require('../utils/ApiError')
const messages = require('../constants/messages')
const CommonRepository = require('../repo/commonRepository')
const { User } = require('../models')

class TokenService {
  constructor() {
    this.repository = new CommonRepository(User)
    this.generateToken = ({ payload, secret, options }) => {
      return jwt.sign(payload, secret, options)
    }
  }

  async verifyToken(token, secret) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          if (err.name === 'JsonWebTokenError') {
            reject(
              new ApiError(
                constant.MESSAGES.INVALID_TOKEN,
                httpStatus.UNAUTHORIZED
              )
            )
          }
          if (err.name === 'TokenExpiredError') {
            reject(
              new ApiError(
                constant.MESSAGES.TOKEN_EXPIRED,
                httpStatus.NOT_ACCEPTABLE
              )
            )
          }
          reject(new ApiError(err.message, httpStatus.UNAUTHORIZED))
        } else {
          resolve(decoded)
        }
      })
    })
  }

  async decodeToken(token, secret) {
    if (!token) {
      throw new ApiError(
        constant.MESSAGES.TOKEN_IS_REQUIRED,
        httpStatus.FORBIDDEN
      )
    }
    return jwt.decode(token)
  }

  async generateAuthTokens(userId, role = 'user') {
    const payload = {
      sub: userId,
      role,
    }
    const accessToken = this.generateToken({
      payload,
      secret: process.env.ACCESS_TOKEN_SECRET,
      options: { expiresIn: configConstant.ACCESS_TOKEN_EXPIRY },
    })
    await userService.updateUser(userId, { token: refreshToken })

    return {
      accessToken,
      refreshToken,
    }
  }
}

module.exports = TokenService
