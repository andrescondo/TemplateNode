const userMethods = {}
const response = require("../network/response");
const errors = require("../network/errors");


userMethods.userGet = (req, res) => {
  response.success(req, res, 'Todo en orden', 200)
}


module.exports = userMethods;