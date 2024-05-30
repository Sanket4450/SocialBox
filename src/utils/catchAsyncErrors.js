const catchAsyncErrors = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch((err) => {
    next(err)
  })
}

module.exports = catchAsyncErrors
