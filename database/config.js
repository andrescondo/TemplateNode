const mongoose = require('mongoose');
const { response, request } = require("express")
const errors = require('../network/errors');
const API = process.env.MONGODB_CNN || 'mongodb://localhost/pruebas' 

const dbConnection = async () => {

    try {
        await mongoose.connect(
          API
            , {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
            }).then(() => console.log('Database connected.'))
            .catch(err => {
              throw errors(err, request, response);
            });

    } catch (err) {
        throw errors(err, request, response);
    }
}

module.exports =  dbConnection