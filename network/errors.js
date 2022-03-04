const response = require('./response');

function errors(err, req, res, next) {
    console.error('[error]', err);

    const message = err.message || 'Error interno';
    const status = err.statusCode || 400;

    response.error(req, res, message, status);
}

module.exports = errors;