
class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const errorHandler = (err, req, res, next) => {
  console.log(err.message)
  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    error: {
      message: errorMessage,
      statusCode: statusCode
    }
  });
};

module.exports = {
  CustomError,
  errorHandler
};
