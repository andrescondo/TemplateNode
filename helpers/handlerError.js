function handlerError(message, code) {
  let e = new Error(message);

  if (code) {
      e.statusCode = code;
  }

  return e;
}

module.exports = handlerError;