const { verify } = require('jsonwebtoken');
const errors = require('../network/errors');
const response = require("../network/response")

const validateJwt = async (req, res, next) => {
    try {
        const { token } = req.body;
        if (!token) {
            response.error(req, res, 'Error en la petición', 401);
        }

        const { uid, email } = verify(token, process.env.SECURE_KEY);

        req.uid = uid;
        req.email = email;

        next();

    } catch (err) {

      //manejo de errores
        throw errors(err, req, res)
    }

}

module.exports = {
    validateJwt
}