exports.success = function (req, res, message, status) {
  let statusCode = status || 200;
  let statusMessage = message || '';

  res.status(status).send({
      error: false,
      status: statusCode,
      body: statusMessage,
  });
}

exports.error = function (req, res, message, status) {
  let statusCode = status || 400;
  let statusMessage = message || 'Internal server error';

  res.status(statusCode).send({
      error: true,
      status: status,
      body: statusMessage,
  });
}