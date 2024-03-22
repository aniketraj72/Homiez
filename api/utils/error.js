const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  console.log("in errorHandler")
  return error;
};

export default errorHandler;
