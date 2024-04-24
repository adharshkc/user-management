// const errorHandler = (err, req, res, next)=>{
//     console.error("errror",err);
//   res.status(500).json({
//     message: 'An internal server error occurred',
//     error: err.message
//   });
// }

// module.exports = errorHandler

// errorHandler.js

class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const errorHandler = (err, req, res, next) => {
  console.log(err)
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
