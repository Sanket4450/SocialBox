const sequelize = require('sequelize')
const httpStatus = require('http-status')
const ApiError = require('../utils/ApiError')

exports.errorConverter = (err, _, __, next) => {
    if (!(err instanceof ApiError)) {
        const statusCode =
            err.statusCode || err instanceof sequelize.Error
                ? httpStatus.BAD_REQUEST
                : httpStatus.INTERNAL_SERVER_ERROR
        const message = err.message || httpStatus[statusCode]
        err = new ApiError(message, statusCode, err.stack)
    }
    next(err)
}

exports.errorHandler = (err, _, res, __) => {
    const { message, statusCode } = err

    const response = {
        success: false,
        code: statusCode,
        message,
        ...(process.env.environment !== 'prod' && { stack: err.stack }),
    }
    if (process.env.environment !== 'prod') {
      console.error(err)
    }

    res.status(statusCode).json(response)
}
