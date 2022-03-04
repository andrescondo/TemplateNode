const userMethods = {}
const response = require("../network/response");
const errors = require("../network/errors");
const handlerError = require("../helpers/handlerError");


userMethods.userGet = (req, res) => {
  response.success(req, res, 'Todo en orden', 200)

  //manejo de errores personalidados
  //if(!req){
  //  throw handlerError('Paso algo', 400)
  //}
}


module.exports = userMethods;